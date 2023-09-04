using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Inventory.GoodsreceiptdetailsRow;

namespace CloudGarage.Inventory
{
    public interface IGoodsreceiptdetailsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class GoodsreceiptdetailsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IGoodsreceiptdetailsDeleteHandler
    {
        public GoodsreceiptdetailsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}