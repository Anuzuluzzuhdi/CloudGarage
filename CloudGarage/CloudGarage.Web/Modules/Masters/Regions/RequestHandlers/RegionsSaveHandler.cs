using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.RegionsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.RegionsRow;

namespace CloudGarage.Masters
{
    public interface IRegionsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class RegionsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IRegionsSaveHandler
    {
        public RegionsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}