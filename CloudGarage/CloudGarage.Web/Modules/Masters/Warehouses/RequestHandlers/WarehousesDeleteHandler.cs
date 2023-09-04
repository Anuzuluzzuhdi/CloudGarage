using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.WarehousesRow;

namespace CloudGarage.Masters
{
    public interface IWarehousesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class WarehousesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IWarehousesDeleteHandler
    {
        public WarehousesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}