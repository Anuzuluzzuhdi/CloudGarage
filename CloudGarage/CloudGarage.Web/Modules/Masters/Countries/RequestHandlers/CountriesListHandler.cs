using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.CountriesRow>;
using MyRow = CloudGarage.Masters.CountriesRow;

namespace CloudGarage.Masters
{
    public interface ICountriesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CountriesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICountriesListHandler
    {
        public CountriesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}