using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Inventory.UnitsRow;

namespace CloudGarage.Inventory
{
    public interface IUnitsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class UnitsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IUnitsDeleteHandler
    {
        public UnitsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}