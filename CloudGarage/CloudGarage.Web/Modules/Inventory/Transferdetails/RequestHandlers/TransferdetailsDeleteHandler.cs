using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Inventory.TransferdetailsRow;

namespace CloudGarage.Inventory
{
    public interface ITransferdetailsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class TransferdetailsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITransferdetailsDeleteHandler
    {
        public TransferdetailsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}