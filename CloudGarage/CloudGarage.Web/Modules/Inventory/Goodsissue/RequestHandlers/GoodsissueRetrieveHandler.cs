using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Inventory.GoodsissueRow>;
using MyRow = CloudGarage.Inventory.GoodsissueRow;

namespace CloudGarage.Inventory
{
    public interface IGoodsissueRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class GoodsissueRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IGoodsissueRetrieveHandler
    {
        public GoodsissueRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}