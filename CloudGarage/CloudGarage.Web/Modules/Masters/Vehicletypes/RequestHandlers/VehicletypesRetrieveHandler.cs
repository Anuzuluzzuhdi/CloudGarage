using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.VehicletypesRow>;
using MyRow = CloudGarage.Masters.VehicletypesRow;

namespace CloudGarage.Masters
{
    public interface IVehicletypesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class VehicletypesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IVehicletypesRetrieveHandler
    {
        public VehicletypesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}