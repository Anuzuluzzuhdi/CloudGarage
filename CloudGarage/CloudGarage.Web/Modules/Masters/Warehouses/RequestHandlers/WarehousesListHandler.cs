using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.WarehousesRow>;
using MyRow = CloudGarage.Masters.WarehousesRow;

namespace CloudGarage.Masters
{
    public interface IWarehousesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class WarehousesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IWarehousesListHandler
    {
        public WarehousesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}