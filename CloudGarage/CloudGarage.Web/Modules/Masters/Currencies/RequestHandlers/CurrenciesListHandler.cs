using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.CurrenciesRow>;
using MyRow = CloudGarage.Masters.CurrenciesRow;

namespace CloudGarage.Masters
{
    public interface ICurrenciesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CurrenciesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICurrenciesListHandler
    {
        public CurrenciesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}