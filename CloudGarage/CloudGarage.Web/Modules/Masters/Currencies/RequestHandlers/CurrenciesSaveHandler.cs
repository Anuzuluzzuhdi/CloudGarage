using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.CurrenciesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.CurrenciesRow;

namespace CloudGarage.Masters
{
    public interface ICurrenciesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CurrenciesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICurrenciesSaveHandler
    {
        public CurrenciesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}