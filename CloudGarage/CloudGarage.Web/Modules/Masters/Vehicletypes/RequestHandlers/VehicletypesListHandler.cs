using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.VehicletypesRow>;
using MyRow = CloudGarage.Masters.VehicletypesRow;

namespace CloudGarage.Masters
{
    public interface IVehicletypesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class VehicletypesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IVehicletypesListHandler
    {
        public VehicletypesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}