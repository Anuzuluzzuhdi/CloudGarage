using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Purchasing.PurchasedetailsRow>;
using MyRow = CloudGarage.Purchasing.PurchasedetailsRow;

namespace CloudGarage.Purchasing
{
    public interface IPurchasedetailsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchasedetailsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPurchasedetailsListHandler
    {
        public PurchasedetailsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}