using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Sales.SaledetailsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Sales.SaledetailsRow;

namespace CloudGarage.Sales
{
    public interface ISaledetailsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class SaledetailsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISaledetailsSaveHandler
    {
        public SaledetailsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}