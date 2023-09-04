using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Purchasing.PurchaseRow>;
using MyRow = CloudGarage.Purchasing.PurchaseRow;

namespace CloudGarage.Purchasing
{
    public interface IPurchaseListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseListHandler
    {
        public PurchaseListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}