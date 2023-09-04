using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.VehiclemodelsRow>;
using MyRow = CloudGarage.Masters.VehiclemodelsRow;

namespace CloudGarage.Masters
{
    public interface IVehiclemodelsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class VehiclemodelsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IVehiclemodelsListHandler
    {
        public VehiclemodelsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}