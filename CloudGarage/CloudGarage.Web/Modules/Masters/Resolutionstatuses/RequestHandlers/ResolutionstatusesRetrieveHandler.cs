using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.ResolutionstatusesRow>;
using MyRow = CloudGarage.Masters.ResolutionstatusesRow;

namespace CloudGarage.Masters
{
    public interface IResolutionstatusesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ResolutionstatusesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IResolutionstatusesRetrieveHandler
    {
        public ResolutionstatusesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}