using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.JobcategoriesRow>;
using MyRow = CloudGarage.Masters.JobcategoriesRow;

namespace CloudGarage.Masters
{
    public interface IJobcategoriesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class JobcategoriesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IJobcategoriesRetrieveHandler
    {
        public JobcategoriesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}