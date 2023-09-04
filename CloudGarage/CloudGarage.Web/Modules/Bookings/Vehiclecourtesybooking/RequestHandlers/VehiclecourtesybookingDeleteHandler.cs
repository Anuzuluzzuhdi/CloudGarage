using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Bookings.VehiclecourtesybookingRow;

namespace CloudGarage.Bookings
{
    public interface IVehiclecourtesybookingDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class VehiclecourtesybookingDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IVehiclecourtesybookingDeleteHandler
    {
        public VehiclecourtesybookingDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}