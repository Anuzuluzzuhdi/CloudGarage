using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Inventory.StocksRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Inventory.StocksRow;

namespace CloudGarage.Inventory
{
    public interface IStocksSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class StocksSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IStocksSaveHandler
    {
        public StocksSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}