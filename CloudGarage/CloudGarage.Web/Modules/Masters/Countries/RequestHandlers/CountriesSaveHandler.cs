using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.CountriesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.CountriesRow;

namespace CloudGarage.Masters
{
    public interface ICountriesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CountriesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICountriesSaveHandler
    {
        public CountriesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}