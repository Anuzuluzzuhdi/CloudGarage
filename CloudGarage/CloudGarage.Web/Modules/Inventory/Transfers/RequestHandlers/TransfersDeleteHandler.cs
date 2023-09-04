using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Inventory.TransfersRow;

namespace CloudGarage.Inventory
{
    public interface ITransfersDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class TransfersDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITransfersDeleteHandler
    {
        public TransfersDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}