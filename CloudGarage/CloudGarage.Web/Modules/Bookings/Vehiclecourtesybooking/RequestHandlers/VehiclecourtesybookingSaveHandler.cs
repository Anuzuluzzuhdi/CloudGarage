using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Bookings.VehiclecourtesybookingRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Bookings.VehiclecourtesybookingRow;

namespace CloudGarage.Bookings
{
    public interface IVehiclecourtesybookingSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class VehiclecourtesybookingSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IVehiclecourtesybookingSaveHandler
    {
        public VehiclecourtesybookingSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}