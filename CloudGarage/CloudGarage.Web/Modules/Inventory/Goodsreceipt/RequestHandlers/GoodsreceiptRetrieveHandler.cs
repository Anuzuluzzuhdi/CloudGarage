using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Inventory.GoodsreceiptRow>;
using MyRow = CloudGarage.Inventory.GoodsreceiptRow;

namespace CloudGarage.Inventory
{
    public interface IGoodsreceiptRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class GoodsreceiptRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IGoodsreceiptRetrieveHandler
    {
        public GoodsreceiptRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}