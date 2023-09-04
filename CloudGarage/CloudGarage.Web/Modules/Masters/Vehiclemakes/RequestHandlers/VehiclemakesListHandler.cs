using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.VehiclemakesRow>;
using MyRow = CloudGarage.Masters.VehiclemakesRow;

namespace CloudGarage.Masters
{
    public interface IVehiclemakesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class VehiclemakesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IVehiclemakesListHandler
    {
        public VehiclemakesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}