using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.JobCards.JobcardsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.JobCards.JobcardsRow;

namespace CloudGarage.JobCards
{
    public interface IJobcardsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class JobcardsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IJobcardsSaveHandler
    {
        public JobcardsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}