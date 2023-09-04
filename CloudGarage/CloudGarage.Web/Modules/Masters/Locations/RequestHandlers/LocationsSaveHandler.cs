using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.LocationsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.LocationsRow;

namespace CloudGarage.Masters
{
    public interface ILocationsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class LocationsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILocationsSaveHandler
    {
        public LocationsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}