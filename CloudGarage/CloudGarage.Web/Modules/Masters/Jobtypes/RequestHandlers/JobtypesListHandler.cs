using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.JobtypesRow>;
using MyRow = CloudGarage.Masters.JobtypesRow;

namespace CloudGarage.Masters
{
    public interface IJobtypesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class JobtypesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IJobtypesListHandler
    {
        public JobtypesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}