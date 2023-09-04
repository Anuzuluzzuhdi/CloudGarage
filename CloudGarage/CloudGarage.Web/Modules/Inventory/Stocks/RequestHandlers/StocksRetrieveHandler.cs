using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Inventory.StocksRow>;
using MyRow = CloudGarage.Inventory.StocksRow;

namespace CloudGarage.Inventory
{
    public interface IStocksRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class StocksRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IStocksRetrieveHandler
    {
        public StocksRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}