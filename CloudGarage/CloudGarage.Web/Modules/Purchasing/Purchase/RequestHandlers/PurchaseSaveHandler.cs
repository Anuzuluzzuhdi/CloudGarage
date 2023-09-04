using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Purchasing.PurchaseRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Purchasing.PurchaseRow;

namespace CloudGarage.Purchasing
{
    public interface IPurchaseSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseSaveHandler
    {
        public PurchaseSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}