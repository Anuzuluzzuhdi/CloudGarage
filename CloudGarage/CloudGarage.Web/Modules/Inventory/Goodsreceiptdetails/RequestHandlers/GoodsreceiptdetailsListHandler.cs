using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Inventory.GoodsreceiptdetailsRow>;
using MyRow = CloudGarage.Inventory.GoodsreceiptdetailsRow;

namespace CloudGarage.Inventory
{
    public interface IGoodsreceiptdetailsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class GoodsreceiptdetailsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IGoodsreceiptdetailsListHandler
    {
        public GoodsreceiptdetailsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}