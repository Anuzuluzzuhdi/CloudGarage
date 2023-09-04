using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Inventory.ProductsRow>;
using MyRow = CloudGarage.Inventory.ProductsRow;

namespace CloudGarage.Inventory
{
    public interface IProductsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IProductsRetrieveHandler
    {
        public ProductsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}