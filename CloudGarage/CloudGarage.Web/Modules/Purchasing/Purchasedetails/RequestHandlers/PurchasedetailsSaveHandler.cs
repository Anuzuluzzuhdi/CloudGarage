using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Purchasing.PurchasedetailsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Purchasing.PurchasedetailsRow;

namespace CloudGarage.Purchasing
{
    public interface IPurchasedetailsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchasedetailsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPurchasedetailsSaveHandler
    {
        public PurchasedetailsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}