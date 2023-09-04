using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Inventory.StocksRow;

namespace CloudGarage.Inventory
{
    public interface IStocksDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class StocksDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IStocksDeleteHandler
    {
        public StocksDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}