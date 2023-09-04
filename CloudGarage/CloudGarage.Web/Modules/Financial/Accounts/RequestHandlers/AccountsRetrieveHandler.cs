using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Financial.AccountsRow>;
using MyRow = CloudGarage.Financial.AccountsRow;

namespace CloudGarage.Financial
{
    public interface IAccountsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AccountsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAccountsRetrieveHandler
    {
        public AccountsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}