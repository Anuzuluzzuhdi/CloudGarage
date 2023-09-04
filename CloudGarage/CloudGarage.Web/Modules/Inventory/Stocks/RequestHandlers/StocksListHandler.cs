using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Inventory.StocksRow>;
using MyRow = CloudGarage.Inventory.StocksRow;

namespace CloudGarage.Inventory
{
    public interface IStocksListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class StocksListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IStocksListHandler
    {
        public StocksListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}