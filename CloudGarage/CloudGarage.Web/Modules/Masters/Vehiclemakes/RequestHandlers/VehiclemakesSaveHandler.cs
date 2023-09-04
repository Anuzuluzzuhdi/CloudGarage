using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.VehiclemakesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.VehiclemakesRow;

namespace CloudGarage.Masters
{
    public interface IVehiclemakesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class VehiclemakesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IVehiclemakesSaveHandler
    {
        public VehiclemakesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}