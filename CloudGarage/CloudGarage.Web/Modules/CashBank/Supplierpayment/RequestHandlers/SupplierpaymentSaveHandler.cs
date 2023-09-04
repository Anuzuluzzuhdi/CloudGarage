using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.CashBank.SupplierpaymentRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.CashBank.SupplierpaymentRow;

namespace CloudGarage.CashBank
{
    public interface ISupplierpaymentSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class SupplierpaymentSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISupplierpaymentSaveHandler
    {
        private IUserRetrieveService UserRetriever { get; }
        public SupplierpaymentSaveHandler(IRequestContext context, IUserRetrieveService userRetriever)
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

            var fldSuppliers = BusinessPartners.SuppliersRow.Fields;
            var suppliersRow = new BusinessPartners.SuppliersRow();
            new SqlQuery().From(suppliersRow)
                .Select(
                    fldSuppliers.CompanyName,
                    fldSuppliers.IsActive)
                .Where(fld.Id == Row.SupplierId.Value)
                .GetFirst(this.Connection);

            if (IsCreate)
            {
                Row.VNo = DateTime.Now.ToString("yyyyMMddHHmmssffff");
                Row.Debit = 0;
                Row.Narration = " Paid to " + suppliersRow.CompanyName;//accountsRow.HeadName +
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
                    .Where(fld.SupplierId == Row.SupplierId.Value)
                    .GetFirst(this.Connection);

            }
        }
    }
}