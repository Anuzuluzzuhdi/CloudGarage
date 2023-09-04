using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.WarehousesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.WarehousesRow;

namespace CloudGarage.Masters
{
    public interface IWarehousesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class WarehousesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IWarehousesSaveHandler
    {
        public WarehousesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}