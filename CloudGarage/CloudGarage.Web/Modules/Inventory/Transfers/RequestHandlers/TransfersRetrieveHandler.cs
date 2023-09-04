using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Inventory.TransfersRow>;
using MyRow = CloudGarage.Inventory.TransfersRow;

namespace CloudGarage.Inventory
{
    public interface ITransfersRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class TransfersRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITransfersRetrieveHandler
    {
        public TransfersRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}