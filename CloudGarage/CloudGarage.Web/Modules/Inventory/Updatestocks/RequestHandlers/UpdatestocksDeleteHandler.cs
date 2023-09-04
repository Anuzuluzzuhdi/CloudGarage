using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Inventory.UpdatestocksRow;

namespace CloudGarage.Inventory
{
    public interface IUpdatestocksDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class UpdatestocksDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IUpdatestocksDeleteHandler
    {
        public UpdatestocksDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}