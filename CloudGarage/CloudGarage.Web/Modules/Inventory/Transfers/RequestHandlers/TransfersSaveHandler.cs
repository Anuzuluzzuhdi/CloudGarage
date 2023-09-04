using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Inventory.TransfersRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Inventory.TransfersRow;

namespace CloudGarage.Inventory
{
    public interface ITransfersSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class TransfersSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITransfersSaveHandler
    {
        public TransfersSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}