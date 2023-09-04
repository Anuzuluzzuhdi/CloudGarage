using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Vehicles.VehicleRow>;
using MyRow = CloudGarage.Vehicles.VehicleRow;

namespace CloudGarage.Vehicles
{
    public interface IVehicleRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class VehicleRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IVehicleRetrieveHandler
    {
        public VehicleRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}