using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Inventory.UnitsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Inventory.UnitsRow;

namespace CloudGarage.Inventory
{
    public interface IUnitsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class UnitsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IUnitsSaveHandler
    {
        public UnitsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}