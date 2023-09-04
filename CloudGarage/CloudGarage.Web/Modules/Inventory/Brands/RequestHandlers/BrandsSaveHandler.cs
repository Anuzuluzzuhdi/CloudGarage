using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Inventory.BrandsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Inventory.BrandsRow;

namespace CloudGarage.Inventory
{
    public interface IBrandsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class BrandsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBrandsSaveHandler
    {
        public BrandsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}