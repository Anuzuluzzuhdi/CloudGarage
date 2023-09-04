using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Inventory.GoodsreceiptRow>;
using MyRow = CloudGarage.Inventory.GoodsreceiptRow;

namespace CloudGarage.Inventory
{
    public interface IGoodsreceiptListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class GoodsreceiptListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IGoodsreceiptListHandler
    {
        public GoodsreceiptListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}