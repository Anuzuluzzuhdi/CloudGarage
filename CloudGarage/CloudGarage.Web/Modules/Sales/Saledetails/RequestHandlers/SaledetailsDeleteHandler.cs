using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Sales.SaledetailsRow;

namespace CloudGarage.Sales
{
    public interface ISaledetailsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class SaledetailsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ISaledetailsDeleteHandler
    {
        public SaledetailsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}