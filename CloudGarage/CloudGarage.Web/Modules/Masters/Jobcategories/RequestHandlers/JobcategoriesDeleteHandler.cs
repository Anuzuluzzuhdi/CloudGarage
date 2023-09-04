using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.JobcategoriesRow;

namespace CloudGarage.Masters
{
    public interface IJobcategoriesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class JobcategoriesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IJobcategoriesDeleteHandler
    {
        public JobcategoriesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}