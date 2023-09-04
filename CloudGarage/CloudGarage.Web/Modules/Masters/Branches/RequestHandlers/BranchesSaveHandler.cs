using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.BranchesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.BranchesRow;

namespace CloudGarage.Masters
{
    public interface IBranchesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class BranchesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBranchesSaveHandler
    {
        public BranchesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}