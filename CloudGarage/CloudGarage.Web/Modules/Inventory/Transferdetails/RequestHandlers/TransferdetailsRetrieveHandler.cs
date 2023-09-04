using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Inventory.TransferdetailsRow>;
using MyRow = CloudGarage.Inventory.TransferdetailsRow;

namespace CloudGarage.Inventory
{
    public interface ITransferdetailsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class TransferdetailsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITransferdetailsRetrieveHandler
    {
        public TransferdetailsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}