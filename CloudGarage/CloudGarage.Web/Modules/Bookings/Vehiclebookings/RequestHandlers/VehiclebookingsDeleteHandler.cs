using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Bookings.VehiclebookingsRow;

namespace CloudGarage.Bookings
{
    public interface IVehiclebookingsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class VehiclebookingsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IVehiclebookingsDeleteHandler
    {
        public VehiclebookingsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}