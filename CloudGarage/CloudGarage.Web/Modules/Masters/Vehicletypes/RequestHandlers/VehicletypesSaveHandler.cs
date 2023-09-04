using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.VehicletypesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.VehicletypesRow;

namespace CloudGarage.Masters
{
    public interface IVehicletypesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class VehicletypesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IVehicletypesSaveHandler
    {
        public VehicletypesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}