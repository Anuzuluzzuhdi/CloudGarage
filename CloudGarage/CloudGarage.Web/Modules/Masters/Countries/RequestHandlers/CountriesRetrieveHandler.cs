using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.CountriesRow>;
using MyRow = CloudGarage.Masters.CountriesRow;

namespace CloudGarage.Masters
{
    public interface ICountriesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CountriesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICountriesRetrieveHandler
    {
        public CountriesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}