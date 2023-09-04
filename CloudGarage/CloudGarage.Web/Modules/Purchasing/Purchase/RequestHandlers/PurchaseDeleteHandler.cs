using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Purchasing.PurchaseRow;

namespace CloudGarage.Purchasing
{
    public interface IPurchaseDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseDeleteHandler
    {
        public PurchaseDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}