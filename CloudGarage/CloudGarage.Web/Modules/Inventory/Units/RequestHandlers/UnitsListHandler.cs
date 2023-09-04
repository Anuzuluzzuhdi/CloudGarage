using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Inventory.UnitsRow>;
using MyRow = CloudGarage.Inventory.UnitsRow;

namespace CloudGarage.Inventory
{
    public interface IUnitsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class UnitsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUnitsListHandler
    {
        public UnitsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}