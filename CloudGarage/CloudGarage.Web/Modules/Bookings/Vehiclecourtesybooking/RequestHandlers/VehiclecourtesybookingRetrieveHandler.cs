using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Bookings.VehiclecourtesybookingRow>;
using MyRow = CloudGarage.Bookings.VehiclecourtesybookingRow;

namespace CloudGarage.Bookings
{
    public interface IVehiclecourtesybookingRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class VehiclecourtesybookingRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IVehiclecourtesybookingRetrieveHandler
    {
        public VehiclecourtesybookingRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}