using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Sales.SalesRow;

namespace CloudGarage.Sales
{
    public interface ISalesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class SalesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ISalesDeleteHandler
    {
        public SalesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}