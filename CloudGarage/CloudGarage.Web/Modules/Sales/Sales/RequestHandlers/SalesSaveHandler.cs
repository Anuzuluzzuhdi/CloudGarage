using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Sales.SalesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Sales.SalesRow;

namespace CloudGarage.Sales
{
    public interface ISalesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class SalesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISalesSaveHandler
    {
        public SalesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}