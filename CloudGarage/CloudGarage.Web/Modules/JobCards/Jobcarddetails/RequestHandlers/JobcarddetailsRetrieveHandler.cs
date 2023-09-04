using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.JobCards.JobcarddetailsRow>;
using MyRow = CloudGarage.JobCards.JobcarddetailsRow;

namespace CloudGarage.JobCards
{
    public interface IJobcarddetailsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class JobcarddetailsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IJobcarddetailsRetrieveHandler
    {
        public JobcarddetailsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}