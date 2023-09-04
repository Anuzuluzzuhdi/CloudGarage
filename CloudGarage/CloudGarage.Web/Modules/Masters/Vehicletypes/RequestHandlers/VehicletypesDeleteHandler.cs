using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.VehicletypesRow;

namespace CloudGarage.Masters
{
    public interface IVehicletypesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class VehicletypesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IVehicletypesDeleteHandler
    {
        public VehicletypesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}