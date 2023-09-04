using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Inventory.ProductsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Inventory.ProductsRow;

namespace CloudGarage.Inventory
{
    public interface IProductsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IProductsSaveHandler
    {
        public ProductsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}