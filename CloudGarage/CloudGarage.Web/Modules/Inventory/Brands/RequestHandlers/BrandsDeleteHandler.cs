using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Inventory.BrandsRow;

namespace CloudGarage.Inventory
{
    public interface IBrandsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class BrandsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBrandsDeleteHandler
    {
        public BrandsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}