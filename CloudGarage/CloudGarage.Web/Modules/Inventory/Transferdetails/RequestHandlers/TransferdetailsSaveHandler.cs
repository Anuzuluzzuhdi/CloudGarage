using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Inventory.TransferdetailsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Inventory.TransferdetailsRow;

namespace CloudGarage.Inventory
{
    public interface ITransferdetailsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class TransferdetailsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITransferdetailsSaveHandler
    {
        public TransferdetailsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}