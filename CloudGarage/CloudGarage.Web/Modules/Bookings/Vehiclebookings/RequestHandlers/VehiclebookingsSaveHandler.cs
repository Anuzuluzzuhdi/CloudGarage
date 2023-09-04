using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Bookings.VehiclebookingsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Bookings.VehiclebookingsRow;

namespace CloudGarage.Bookings
{
    public interface IVehiclebookingsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class VehiclebookingsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IVehiclebookingsSaveHandler
    {
        public VehiclebookingsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}