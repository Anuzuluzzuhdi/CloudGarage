using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Inventory.BrandsRow>;
using MyRow = CloudGarage.Inventory.BrandsRow;

namespace CloudGarage.Inventory
{
    public interface IBrandsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class BrandsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBrandsRetrieveHandler
    {
        public BrandsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}