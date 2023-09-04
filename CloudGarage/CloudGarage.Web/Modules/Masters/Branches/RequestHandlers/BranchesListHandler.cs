using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.BranchesRow>;
using MyRow = CloudGarage.Masters.BranchesRow;

namespace CloudGarage.Masters
{
    public interface IBranchesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class BranchesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBranchesListHandler
    {
        public BranchesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}