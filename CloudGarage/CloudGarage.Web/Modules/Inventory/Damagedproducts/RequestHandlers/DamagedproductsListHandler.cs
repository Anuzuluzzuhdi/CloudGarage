using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Inventory.DamagedproductsRow>;
using MyRow = CloudGarage.Inventory.DamagedproductsRow;

namespace CloudGarage.Inventory
{
    public interface IDamagedproductsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class DamagedproductsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDamagedproductsListHandler
    {
        public DamagedproductsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}