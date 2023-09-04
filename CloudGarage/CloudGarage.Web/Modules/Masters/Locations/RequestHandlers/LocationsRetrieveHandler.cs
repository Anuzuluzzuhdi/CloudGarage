using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.LocationsRow>;
using MyRow = CloudGarage.Masters.LocationsRow;

namespace CloudGarage.Masters
{
    public interface ILocationsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class LocationsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ILocationsRetrieveHandler
    {
        public LocationsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}