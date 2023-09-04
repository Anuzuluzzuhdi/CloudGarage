using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.VehiclemodelsRow;

namespace CloudGarage.Masters
{
    public interface IVehiclemodelsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class VehiclemodelsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IVehiclemodelsDeleteHandler
    {
        public VehiclemodelsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}