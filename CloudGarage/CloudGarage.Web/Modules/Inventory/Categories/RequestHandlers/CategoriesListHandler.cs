using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Inventory.CategoriesRow>;
using MyRow = CloudGarage.Inventory.CategoriesRow;

namespace CloudGarage.Inventory
{
    public interface ICategoriesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CategoriesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesListHandler
    {
        public CategoriesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}