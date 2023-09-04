using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Purchasing.PurchasedetailsRow>;
using MyRow = CloudGarage.Purchasing.PurchasedetailsRow;

namespace CloudGarage.Purchasing
{
    public interface IPurchasedetailsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchasedetailsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPurchasedetailsRetrieveHandler
    {
        public PurchasedetailsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}