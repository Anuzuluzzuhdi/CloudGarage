using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.JobtypesRow>;
using MyRow = CloudGarage.Masters.JobtypesRow;

namespace CloudGarage.Masters
{
    public interface IJobtypesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class JobtypesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IJobtypesRetrieveHandler
    {
        public JobtypesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}