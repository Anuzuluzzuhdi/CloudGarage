using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.RegionsRow>;
using MyRow = CloudGarage.Masters.RegionsRow;

namespace CloudGarage.Masters
{
    public interface IRegionsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class RegionsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IRegionsListHandler
    {
        public RegionsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}