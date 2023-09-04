using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.ResolutionstatusesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.ResolutionstatusesRow;

namespace CloudGarage.Masters
{
    public interface IResolutionstatusesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ResolutionstatusesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IResolutionstatusesSaveHandler
    {
        public ResolutionstatusesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}