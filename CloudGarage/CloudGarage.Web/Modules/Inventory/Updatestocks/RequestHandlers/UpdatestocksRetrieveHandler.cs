using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Inventory.UpdatestocksRow>;
using MyRow = CloudGarage.Inventory.UpdatestocksRow;

namespace CloudGarage.Inventory
{
    public interface IUpdatestocksRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class UpdatestocksRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IUpdatestocksRetrieveHandler
    {
        public UpdatestocksRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}