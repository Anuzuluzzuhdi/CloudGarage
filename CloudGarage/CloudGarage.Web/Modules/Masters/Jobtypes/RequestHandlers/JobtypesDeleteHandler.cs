using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.JobtypesRow;

namespace CloudGarage.Masters
{
    public interface IJobtypesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class JobtypesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IJobtypesDeleteHandler
    {
        public JobtypesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}