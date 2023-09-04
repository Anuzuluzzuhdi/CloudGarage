using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Bookings.VehiclebookingsRow>;
using MyRow = CloudGarage.Bookings.VehiclebookingsRow;

namespace CloudGarage.Bookings
{
    public interface IVehiclebookingsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class VehiclebookingsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IVehiclebookingsListHandler
    {
        public VehiclebookingsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}