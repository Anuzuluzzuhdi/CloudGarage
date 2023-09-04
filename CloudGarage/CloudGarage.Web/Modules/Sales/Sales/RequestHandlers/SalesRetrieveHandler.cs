using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Sales.SalesRow>;
using MyRow = CloudGarage.Sales.SalesRow;

namespace CloudGarage.Sales
{
    public interface ISalesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class SalesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISalesRetrieveHandler
    {
        public SalesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}