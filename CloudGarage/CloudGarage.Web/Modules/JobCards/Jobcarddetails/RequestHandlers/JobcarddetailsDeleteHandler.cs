using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.JobCards.JobcarddetailsRow;

namespace CloudGarage.JobCards
{
    public interface IJobcarddetailsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class JobcarddetailsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IJobcarddetailsDeleteHandler
    {
        public JobcarddetailsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}