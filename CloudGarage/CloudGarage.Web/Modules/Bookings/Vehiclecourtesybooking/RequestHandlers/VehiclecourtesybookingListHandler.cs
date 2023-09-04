using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Bookings.VehiclecourtesybookingRow>;
using MyRow = CloudGarage.Bookings.VehiclecourtesybookingRow;

namespace CloudGarage.Bookings
{
    public interface IVehiclecourtesybookingListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class VehiclecourtesybookingListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IVehiclecourtesybookingListHandler
    {
        public VehiclecourtesybookingListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}