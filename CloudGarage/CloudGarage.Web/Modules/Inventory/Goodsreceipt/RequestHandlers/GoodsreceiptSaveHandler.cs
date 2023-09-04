using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Inventory.GoodsreceiptRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Inventory.GoodsreceiptRow;

namespace CloudGarage.Inventory
{
    public interface IGoodsreceiptSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class GoodsreceiptSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IGoodsreceiptSaveHandler
    {
        public GoodsreceiptSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}