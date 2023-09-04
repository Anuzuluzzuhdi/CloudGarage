using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Inventory.CategoriesRow>;
using MyRow = CloudGarage.Inventory.CategoriesRow;

namespace CloudGarage.Inventory
{
    public interface ICategoriesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CategoriesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesRetrieveHandler
    {
        public CategoriesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}