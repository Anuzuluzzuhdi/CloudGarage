using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.RegionsRow>;
using MyRow = CloudGarage.Masters.RegionsRow;

namespace CloudGarage.Masters
{
    public interface IRegionsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class RegionsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IRegionsRetrieveHandler
    {
        public RegionsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}