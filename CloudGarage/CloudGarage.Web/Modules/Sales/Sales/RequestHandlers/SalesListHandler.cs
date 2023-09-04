using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Sales.SalesRow>;
using MyRow = CloudGarage.Sales.SalesRow;

namespace CloudGarage.Sales
{
    public interface ISalesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class SalesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISalesListHandler
    {
        public SalesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}