using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Vehicles.VehicleRow;

namespace CloudGarage.Vehicles
{
    public interface IVehicleDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class VehicleDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IVehicleDeleteHandler
    {
        public VehicleDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}