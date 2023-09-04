using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.JobcategoriesRow>;
using MyRow = CloudGarage.Masters.JobcategoriesRow;

namespace CloudGarage.Masters
{
    public interface IJobcategoriesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class JobcategoriesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IJobcategoriesListHandler
    {
        public JobcategoriesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}