using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.CashBank.CustomerreceiveRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.CashBank.CustomerreceiveRow;

namespace CloudGarage.CashBank
{
    public interface ICustomerreceiveSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CustomerreceiveSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICustomerreceiveSaveHandler
    {
        private IUserRetrieveService UserRetriever { get; }
        public CustomerreceiveSaveHandler(IRequestContext context, IUserRetrieveService userRetriever)
             : base(context)
        {
            UserRetriever = userRetriever ?? throw new ArgumentNullException(nameof(userRetriever));
        }
        protected override void SetInternalFields()
        {
            base.SetInternalFields();

            //var user = (UserDefinition)Authorization.UserDefinition;
            UserDefinition user = User.GetUserDefinition<UserDefinition>(UserRetriever);
            var fld = Financial.AccountsRow.Fields;
            var accountsRow = new Financial.AccountsRow();
            new SqlQuery().From(accountsRow)
                .Select(
                    fld.HeadCode,
                    fld.HeadName,
                    fld.IsActive)
                .Where(fld.Id == Row.CoaId.Value)
                .GetFirst(this.Connection);

            var fldCustomer = BusinessPartners.CustomersRow.Fields;
            var customerRow = new BusinessPartners.CustomersRow();
            new SqlQuery().From(customerRow)
                .Select(
                    fldCustomer.Name,
                    fldCustomer.IsActive)
                .Where(fld.Id == Row.CustomerId.Value)
                .GetFirst(this.Connection);

            if (IsCreate)
            {
                Row.VNo = DateTime.Now.ToString("yyyyMMddHHmmssffff");
                Row.Credit = 0;
                Row.Narration = accountsRow.HeadName + " for " + customerRow.Name;
                Row.Coa = accountsRow.HeadCode.ToString();
                Row.IsAppove = true;
                Row.IsPosted = true;
                Row.InsertDate = DateTime.Now;
                Row.InsertUserId = user.UserId;
            }
        }
            protected override void AfterSave()
        {

            base.AfterSave();
            {
                var fld = Financial.AccountsRow.Fields;
                var accountsRow = new Financial.AccountsRow();
                new SqlQuery().From(accountsRow)
                    .Select(
                        fld.Id,
                        fld.HeadCode,
                        fld.HeadName,
                        fld.IsActive)
                    .Where(fld.CustomerId == Row.CustomerId.Value)
                    .GetFirst(this.Connection);
            }
        }
    }
 }