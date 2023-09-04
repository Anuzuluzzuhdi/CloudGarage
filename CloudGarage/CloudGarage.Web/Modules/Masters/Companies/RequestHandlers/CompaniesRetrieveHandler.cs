using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.CompaniesRow>;
using MyRow = CloudGarage.Masters.CompaniesRow;

namespace CloudGarage.Masters
{
    public interface ICompaniesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CompaniesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICompaniesRetrieveHandler
    {
        public CompaniesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}