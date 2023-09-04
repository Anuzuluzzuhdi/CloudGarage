using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Vehicles.VehicleRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Vehicles.VehicleRow;

namespace CloudGarage.Vehicles
{
    public interface IVehicleSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class VehicleSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IVehicleSaveHandler
    {
        public VehicleSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}