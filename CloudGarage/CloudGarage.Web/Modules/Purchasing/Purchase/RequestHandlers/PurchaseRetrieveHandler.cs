using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Purchasing.PurchaseRow>;
using MyRow = CloudGarage.Purchasing.PurchaseRow;

namespace CloudGarage.Purchasing
{
    public interface IPurchaseRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseRetrieveHandler
    {
        public PurchaseRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}