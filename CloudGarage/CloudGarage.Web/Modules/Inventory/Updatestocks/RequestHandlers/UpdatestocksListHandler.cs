using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Inventory.UpdatestocksRow>;
using MyRow = CloudGarage.Inventory.UpdatestocksRow;

namespace CloudGarage.Inventory
{
    public interface IUpdatestocksListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class UpdatestocksListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUpdatestocksListHandler
    {
        public UpdatestocksListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}