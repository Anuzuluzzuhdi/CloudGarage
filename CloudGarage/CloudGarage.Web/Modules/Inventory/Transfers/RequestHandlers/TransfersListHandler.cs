using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Inventory.TransfersRow>;
using MyRow = CloudGarage.Inventory.TransfersRow;

namespace CloudGarage.Inventory
{
    public interface ITransfersListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class TransfersListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITransfersListHandler
    {
        public TransfersListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}