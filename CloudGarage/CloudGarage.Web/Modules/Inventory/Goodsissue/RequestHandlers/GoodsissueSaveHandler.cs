using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Inventory.GoodsissueRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Inventory.GoodsissueRow;

namespace CloudGarage.Inventory
{
    public interface IGoodsissueSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class GoodsissueSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IGoodsissueSaveHandler
    {
        public GoodsissueSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}