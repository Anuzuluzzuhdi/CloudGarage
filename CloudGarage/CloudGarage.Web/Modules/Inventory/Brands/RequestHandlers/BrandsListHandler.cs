using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Inventory.BrandsRow>;
using MyRow = CloudGarage.Inventory.BrandsRow;

namespace CloudGarage.Inventory
{
    public interface IBrandsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class BrandsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBrandsListHandler
    {
        public BrandsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}