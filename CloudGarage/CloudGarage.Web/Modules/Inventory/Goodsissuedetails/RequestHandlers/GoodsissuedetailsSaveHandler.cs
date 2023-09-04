using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Inventory.GoodsissuedetailsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Inventory.GoodsissuedetailsRow;

namespace CloudGarage.Inventory
{
    public interface IGoodsissuedetailsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class GoodsissuedetailsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IGoodsissuedetailsSaveHandler
    {
        public GoodsissuedetailsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}