using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.BranchesRow>;
using MyRow = CloudGarage.Masters.BranchesRow;

namespace CloudGarage.Masters
{
    public interface IBranchesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class BranchesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBranchesRetrieveHandler
    {
        public BranchesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}