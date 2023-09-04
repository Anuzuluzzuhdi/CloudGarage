using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Inventory.GoodsissuedetailsRow>;
using MyRow = CloudGarage.Inventory.GoodsissuedetailsRow;

namespace CloudGarage.Inventory
{
    public interface IGoodsissuedetailsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class GoodsissuedetailsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IGoodsissuedetailsRetrieveHandler
    {
        public GoodsissuedetailsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}