using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Inventory.UnitsRow>;
using MyRow = CloudGarage.Inventory.UnitsRow;

namespace CloudGarage.Inventory
{
    public interface IUnitsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class UnitsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IUnitsRetrieveHandler
    {
        public UnitsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}