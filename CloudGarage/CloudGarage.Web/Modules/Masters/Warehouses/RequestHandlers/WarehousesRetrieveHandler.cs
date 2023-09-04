using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.WarehousesRow>;
using MyRow = CloudGarage.Masters.WarehousesRow;

namespace CloudGarage.Masters
{
    public interface IWarehousesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class WarehousesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IWarehousesRetrieveHandler
    {
        public WarehousesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}