using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Inventory.GoodsreceiptdetailsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Inventory.GoodsreceiptdetailsRow;

namespace CloudGarage.Inventory
{
    public interface IGoodsreceiptdetailsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class GoodsreceiptdetailsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IGoodsreceiptdetailsSaveHandler
    {
        public GoodsreceiptdetailsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}