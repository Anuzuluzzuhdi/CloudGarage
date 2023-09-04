using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.BranchesRow;

namespace CloudGarage.Masters
{
    public interface IBranchesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class BranchesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBranchesDeleteHandler
    {
        public BranchesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}