using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Inventory.UpdatestocksRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Inventory.UpdatestocksRow;

namespace CloudGarage.Inventory
{
    public interface IUpdatestocksSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class UpdatestocksSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IUpdatestocksSaveHandler
    {
        public UpdatestocksSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}