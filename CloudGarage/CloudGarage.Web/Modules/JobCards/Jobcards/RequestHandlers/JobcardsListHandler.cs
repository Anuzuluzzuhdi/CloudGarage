using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.JobCards.JobcardsRow>;
using MyRow = CloudGarage.JobCards.JobcardsRow;

namespace CloudGarage.JobCards
{
    public interface IJobcardsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class JobcardsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IJobcardsListHandler
    {
        public JobcardsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}