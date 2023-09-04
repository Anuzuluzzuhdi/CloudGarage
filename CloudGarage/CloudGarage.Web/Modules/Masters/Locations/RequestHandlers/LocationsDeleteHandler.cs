using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.LocationsRow;

namespace CloudGarage.Masters
{
    public interface ILocationsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class LocationsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ILocationsDeleteHandler
    {
        public LocationsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}