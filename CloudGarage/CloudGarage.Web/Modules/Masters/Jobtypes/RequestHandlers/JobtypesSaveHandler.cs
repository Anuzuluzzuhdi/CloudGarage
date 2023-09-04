using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.JobtypesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.JobtypesRow;

namespace CloudGarage.Masters
{
    public interface IJobtypesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class JobtypesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IJobtypesSaveHandler
    {
        public JobtypesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}