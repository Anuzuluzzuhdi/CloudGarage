using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Inventory.DamagedproductsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Inventory.DamagedproductsRow;

namespace CloudGarage.Inventory
{
    public interface IDamagedproductsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class DamagedproductsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDamagedproductsSaveHandler
    {
        public DamagedproductsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}