using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Sales.SaledetailsRow>;
using MyRow = CloudGarage.Sales.SaledetailsRow;

namespace CloudGarage.Sales
{
    public interface ISaledetailsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class SaledetailsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISaledetailsListHandler
    {
        public SaledetailsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}