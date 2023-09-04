using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.VehiclemakesRow>;
using MyRow = CloudGarage.Masters.VehiclemakesRow;

namespace CloudGarage.Masters
{
    public interface IVehiclemakesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class VehiclemakesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IVehiclemakesRetrieveHandler
    {
        public VehiclemakesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}