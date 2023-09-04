using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.JobCards.JobcarddetailsRow>;
using MyRow = CloudGarage.JobCards.JobcarddetailsRow;

namespace CloudGarage.JobCards
{
    public interface IJobcarddetailsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class JobcarddetailsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IJobcarddetailsListHandler
    {
        public JobcarddetailsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}