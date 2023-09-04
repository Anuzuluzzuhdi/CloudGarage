using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Financial.AccountsRow>;
using MyRow = CloudGarage.Financial.AccountsRow;

namespace CloudGarage.Financial
{
    public interface IAccountsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AccountsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAccountsListHandler
    {
        public AccountsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}