using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.VehiclemodelsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.VehiclemodelsRow;

namespace CloudGarage.Masters
{
    public interface IVehiclemodelsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class VehiclemodelsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IVehiclemodelsSaveHandler
    {
        public VehiclemodelsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}