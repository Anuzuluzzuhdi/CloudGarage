using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Vehicles.VehicleRow>;
using MyRow = CloudGarage.Vehicles.VehicleRow;

namespace CloudGarage.Vehicles
{
    public interface IVehicleListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class VehicleListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IVehicleListHandler
    {
        public VehicleListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}