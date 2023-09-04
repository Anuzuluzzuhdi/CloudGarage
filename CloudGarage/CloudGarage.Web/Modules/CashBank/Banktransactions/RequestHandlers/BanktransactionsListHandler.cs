using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.CashBank.BanktransactionsRow>;
using MyRow = CloudGarage.CashBank.BanktransactionsRow;

namespace CloudGarage.CashBank
{
    public interface IBanktransactionsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class BanktransactionsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBanktransactionsListHandler
    {
        public BanktransactionsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}