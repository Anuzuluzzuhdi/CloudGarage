using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.LocationsRow>;
using MyRow = CloudGarage.Masters.LocationsRow;

namespace CloudGarage.Masters
{
    public interface ILocationsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class LocationsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ILocationsListHandler
    {
        public LocationsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}