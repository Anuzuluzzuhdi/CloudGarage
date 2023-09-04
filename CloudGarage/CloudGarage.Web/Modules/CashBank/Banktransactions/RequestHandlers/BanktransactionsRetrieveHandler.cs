using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.CashBank.BanktransactionsRow>;
using MyRow = CloudGarage.CashBank.BanktransactionsRow;

namespace CloudGarage.CashBank
{
    public interface IBanktransactionsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class BanktransactionsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBanktransactionsRetrieveHandler
    {
        public BanktransactionsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}