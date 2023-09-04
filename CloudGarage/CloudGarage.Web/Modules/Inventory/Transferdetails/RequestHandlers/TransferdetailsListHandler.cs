using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Inventory.TransferdetailsRow>;
using MyRow = CloudGarage.Inventory.TransferdetailsRow;

namespace CloudGarage.Inventory
{
    public interface ITransferdetailsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class TransferdetailsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITransferdetailsListHandler
    {
        public TransferdetailsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}