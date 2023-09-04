using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Inventory.DamagedproductsRow;

namespace CloudGarage.Inventory
{
    public interface IDamagedproductsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class DamagedproductsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDamagedproductsDeleteHandler
    {
        public DamagedproductsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}