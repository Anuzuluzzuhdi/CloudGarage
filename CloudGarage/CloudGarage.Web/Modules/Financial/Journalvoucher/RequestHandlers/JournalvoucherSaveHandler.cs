using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Financial.JournalvoucherRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Financial.JournalvoucherRow;

namespace CloudGarage.Financial
{
    public interface IJournalvoucherSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class JournalvoucherSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IJournalvoucherSaveHandler
    {
        private IUserRetrieveService UserRetriever { get; }
        public JournalvoucherSaveHandler(IRequestContext context, IUserRetrieveService userRetriever)
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
                Row.Coa = accountsRow.HeadCode.ToString();
                Row.IsAppove = true;
                Row.IsPosted = true;
                Row.InsertDate = DateTime.Now;
                Row.InsertUserId = user.UserId;
            }

        }
    }
}