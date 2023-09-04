using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.CompaniesRow>;
using MyRow = CloudGarage.Masters.CompaniesRow;

namespace CloudGarage.Masters
{
    public interface ICompaniesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CompaniesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICompaniesListHandler
    {
        public CompaniesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}