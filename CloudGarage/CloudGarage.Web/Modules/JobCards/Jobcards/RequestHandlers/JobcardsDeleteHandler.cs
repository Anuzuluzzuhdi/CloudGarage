using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.JobCards.JobcardsRow;

namespace CloudGarage.JobCards
{
    public interface IJobcardsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class JobcardsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IJobcardsDeleteHandler
    {
        public JobcardsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}