using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Inventory.DamagedproductsRow>;
using MyRow = CloudGarage.Inventory.DamagedproductsRow;

namespace CloudGarage.Inventory
{
    public interface IDamagedproductsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class DamagedproductsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDamagedproductsRetrieveHandler
    {
        public DamagedproductsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}