using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.JobCards.JobcardsRow>;
using MyRow = CloudGarage.JobCards.JobcardsRow;

namespace CloudGarage.JobCards
{
    public interface IJobcardsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class JobcardsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IJobcardsRetrieveHandler
    {
        public JobcardsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}