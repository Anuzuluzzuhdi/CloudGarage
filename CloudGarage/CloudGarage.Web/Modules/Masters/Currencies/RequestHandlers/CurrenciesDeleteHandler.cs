using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.CurrenciesRow;

namespace CloudGarage.Masters
{
    public interface ICurrenciesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class CurrenciesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICurrenciesDeleteHandler
    {
        public CurrenciesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}