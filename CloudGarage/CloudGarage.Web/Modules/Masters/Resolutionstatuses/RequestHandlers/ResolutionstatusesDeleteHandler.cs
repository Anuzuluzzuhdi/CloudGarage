using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.ResolutionstatusesRow;

namespace CloudGarage.Masters
{
    public interface IResolutionstatusesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ResolutionstatusesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IResolutionstatusesDeleteHandler
    {
        public ResolutionstatusesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}