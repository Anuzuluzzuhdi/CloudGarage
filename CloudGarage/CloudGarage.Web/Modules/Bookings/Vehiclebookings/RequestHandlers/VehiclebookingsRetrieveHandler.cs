using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Bookings.VehiclebookingsRow>;
using MyRow = CloudGarage.Bookings.VehiclebookingsRow;

namespace CloudGarage.Bookings
{
    public interface IVehiclebookingsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class VehiclebookingsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IVehiclebookingsRetrieveHandler
    {
        public VehiclebookingsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}