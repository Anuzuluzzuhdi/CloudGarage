using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Purchasing.PurchasedetailsRow;

namespace CloudGarage.Purchasing
{
    public interface IPurchasedetailsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchasedetailsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPurchasedetailsDeleteHandler
    {
        public PurchasedetailsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}