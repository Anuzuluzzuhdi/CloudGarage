using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.VehiclemakesRow;

namespace CloudGarage.Masters
{
    public interface IVehiclemakesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class VehiclemakesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IVehiclemakesDeleteHandler
    {
        public VehiclemakesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}