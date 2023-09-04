using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Financial.CreditvoucherRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Financial.CreditvoucherRow;

namespace CloudGarage.Financial
{
    public interface ICreditvoucherSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CreditvoucherSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICreditvoucherSaveHandler
    {
        private IUserRetrieveService UserRetriever { get; }
        public CreditvoucherSaveHandler(IRequestContext context, IUserRetrieveService userRetriever)
             : base(context)
        {
            UserRetriever = userRetriever ?? throw new ArgumentNullException(nameof(userRetriever));
        }
        protected override void SetInternalFields()
        {
            base.SetInternalFields();

            //var user = (UserDefinition)Authorization.UserDefinition;
            UserDefinition user = User.GetUserDefinition<UserDefinition>(UserRetriever);
            var fld = AccountsRow.Fields;
            var accountsRow = new AccountsRow();
            new SqlQuery().From(accountsRow)
                .Select(
                    fld.HeadCode,
                    fld.HeadName,
                    fld.IsActive)
                .Where(fld.Id == Row.CoaId.Value)
                .GetFirst(this.Connection);

            if (IsCreate)
            {
                Row.VNo = DateTime.Now.ToString("yyyyMMddHHmmssffff");
                Row.Credit = 0;
                Row.Narration = " Credit voucher from " + accountsRow.HeadName;
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
                var fld = AccountsRow.Fields;
                var accountsRow = new AccountsRow();
                new SqlQuery().From(accountsRow)
                    .Select(
                        fld.Id,
                        fld.HeadCode,
                        fld.HeadName,
                        fld.IsActive)
                    .Where(fld.Id == Row.CreditAccountId.Value)
                    .GetFirst(this.Connection);
            }
        }
    }
}