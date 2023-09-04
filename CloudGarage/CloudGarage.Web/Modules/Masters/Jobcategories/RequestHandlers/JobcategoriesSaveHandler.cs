using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.JobcategoriesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.JobcategoriesRow;

namespace CloudGarage.Masters
{
    public interface IJobcategoriesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class JobcategoriesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IJobcategoriesSaveHandler
    {
        public JobcategoriesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}