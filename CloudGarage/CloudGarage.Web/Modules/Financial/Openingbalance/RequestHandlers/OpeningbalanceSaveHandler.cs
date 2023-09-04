using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Financial.OpeningbalanceRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Financial.OpeningbalanceRow;

namespace CloudGarage.Financial
{
    public interface IOpeningbalanceSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class OpeningbalanceSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IOpeningbalanceSaveHandler
    {
        private IUserRetrieveService UserRetriever { get; }
        public OpeningbalanceSaveHandler(IRequestContext context, IUserRetrieveService userRetriever)
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
                if (Row.AccountType == CashBank.AccountKind.Credit)
                {
                    Row.Credit = Row.Debit;
                    Row.Debit = 0;
                }
                else if (Row.AccountType == CashBank.AccountKind.Debit)
                {
                    Row.Credit = 0;
                }
                Row.VNo = DateTime.Now.ToString("yyyyMMddHHmmssffff");
                Row.Vtype = "Opening";
                Row.IsOpening = true;
                //Row.Narration = " Credit voucher from " + accountsRow.HeadName;
                Row.Coa = accountsRow.HeadCode.ToString();
                Row.IsAppove = true;
                Row.IsPosted = true;
                Row.InsertDate = DateTime.Now;
                Row.InsertUserId = user.UserId;
            }

        }
    }
}