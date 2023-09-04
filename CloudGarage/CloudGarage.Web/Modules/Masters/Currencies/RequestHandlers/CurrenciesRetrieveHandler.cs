using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.CurrenciesRow>;
using MyRow = CloudGarage.Masters.CurrenciesRow;

namespace CloudGarage.Masters
{
    public interface ICurrenciesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CurrenciesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICurrenciesRetrieveHandler
    {
        public CurrenciesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}