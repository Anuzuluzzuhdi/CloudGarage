using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Sales.SaledetailsRow>;
using MyRow = CloudGarage.Sales.SaledetailsRow;

namespace CloudGarage.Sales
{
    public interface ISaledetailsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class SaledetailsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISaledetailsRetrieveHandler
    {
        public SaledetailsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}