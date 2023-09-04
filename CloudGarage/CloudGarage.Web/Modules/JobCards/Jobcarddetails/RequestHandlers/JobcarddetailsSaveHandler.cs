using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.JobCards.JobcarddetailsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.JobCards.JobcarddetailsRow;

namespace CloudGarage.JobCards
{
    public interface IJobcarddetailsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class JobcarddetailsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IJobcarddetailsSaveHandler
    {
        public JobcarddetailsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}