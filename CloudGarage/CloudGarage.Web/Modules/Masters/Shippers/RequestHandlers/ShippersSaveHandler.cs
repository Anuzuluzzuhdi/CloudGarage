using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.ShippersRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.ShippersRow;

namespace CloudGarage.Masters
{
    public interface IShippersSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ShippersSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IShippersSaveHandler
    {
        public ShippersSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}