using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Inventory.GoodsreceiptdetailsRow>;
using MyRow = CloudGarage.Inventory.GoodsreceiptdetailsRow;

namespace CloudGarage.Inventory
{
    public interface IGoodsreceiptdetailsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class GoodsreceiptdetailsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IGoodsreceiptdetailsRetrieveHandler
    {
        public GoodsreceiptdetailsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}