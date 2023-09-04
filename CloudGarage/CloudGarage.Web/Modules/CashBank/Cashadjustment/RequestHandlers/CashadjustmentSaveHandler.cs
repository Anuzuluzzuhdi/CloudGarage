using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.CashBank.CashadjustmentRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.CashBank.CashadjustmentRow;

namespace CloudGarage.CashBank
{
    public interface ICashadjustmentSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CashadjustmentSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICashadjustmentSaveHandler
    {
        private IUserRetrieveService UserRetriever { get; }
        public CashadjustmentSaveHandler(IRequestContext context, IUserRetrieveService userRetriever)
             : base(context)
        {
            UserRetriever = userRetriever ?? throw new ArgumentNullException(nameof(userRetriever));
        }
        protected override void SetInternalFields()
        {
            base.SetInternalFields();

            //var user = (UserDefinition)Authorization.UserDefinition;
            UserDefinition user = User.GetUserDefinition<UserDefinition>(UserRetriever);
            //var user = (UserDefinition)Authorization.UserDefinition;

            var fld = Financial.AccountsRow.Fields;
            var accountsRow = new Financial.AccountsRow();
            new SqlQuery().From(accountsRow)
                .Select(
                    fld.Id,
                    fld.HeadCode,
                    fld.IsActive)
                .Where(fld.HeadCode == 1020203)//1020101
                .GetFirst(this.Connection);
            if (IsCreate)
            {
                Row.VNo = DateTime.Now.ToString("yyyyMMddHHmmssffff");
                if (Row.AccountType == AccountKind.Credit)
                {
                    Row.Debit = 0;
                }
                else if (Row.AccountType == AccountKind.Debit)
                {
                    Row.Debit = Row.Credit;
                    Row.Credit = 0;
                }
                Row.CoaId = accountsRow.Id;
                Row.Coa = accountsRow.HeadCode.ToString();
                Row.IsAppove = true;
                Row.IsPosted = true;
                Row.InsertDate = DateTime.Now;
                Row.InsertUserId = user.UserId;
            }

        }
    }
}