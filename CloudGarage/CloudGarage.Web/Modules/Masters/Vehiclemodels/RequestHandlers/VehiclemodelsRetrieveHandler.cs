using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.VehiclemodelsRow>;
using MyRow = CloudGarage.Masters.VehiclemodelsRow;

namespace CloudGarage.Masters
{
    public interface IVehiclemodelsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class VehiclemodelsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IVehiclemodelsRetrieveHandler
    {
        public VehiclemodelsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}