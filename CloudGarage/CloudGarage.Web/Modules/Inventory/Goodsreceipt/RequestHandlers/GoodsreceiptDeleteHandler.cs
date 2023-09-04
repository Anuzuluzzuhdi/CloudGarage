using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Inventory.GoodsreceiptRow;

namespace CloudGarage.Inventory
{
    public interface IGoodsreceiptDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class GoodsreceiptDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IGoodsreceiptDeleteHandler
    {
        public GoodsreceiptDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}