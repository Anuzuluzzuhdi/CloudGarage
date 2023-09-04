using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.CashBank.BanktransactionsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.CashBank.BanktransactionsRow;

namespace CloudGarage.CashBank
{
    public interface IBanktransactionsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class BanktransactionsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBanktransactionsSaveHandler
    {
        private IUserRetrieveService UserRetriever { get; }
        public BanktransactionsSaveHandler(IRequestContext context, IUserRetrieveService userRetriever)
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
                    fld.IsActive)
                .Where(fld.Id == Row.CoaId.Value)
                .GetFirst(this.Connection);
            if (IsCreate)
            
                if (Row.AccountType == AccountKind.Credit)
                {
                    Row.Debit = 0;
                }
                else if (Row.AccountType == AccountKind.Debit)
                {
                    Row.Debit = Row.Credit;
                    Row.Credit = 0;
                }
                Row.Coa = accountsRow.HeadCode.ToString();
                Row.IsAppove = true;
                Row.IsPosted = true;
                Row.InsertDate = DateTime.Now;
                Row.InsertUserId = user.UserId;
            }
        }
    }