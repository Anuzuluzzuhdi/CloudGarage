using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Inventory.GoodsissueRow;

namespace CloudGarage.Inventory
{
    public interface IGoodsissueDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class GoodsissueDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IGoodsissueDeleteHandler
    {
        public GoodsissueDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}