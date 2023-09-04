using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.ResolutionstatusesRow>;
using MyRow = CloudGarage.Masters.ResolutionstatusesRow;

namespace CloudGarage.Masters
{
    public interface IResolutionstatusesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ResolutionstatusesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IResolutionstatusesListHandler
    {
        public ResolutionstatusesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}