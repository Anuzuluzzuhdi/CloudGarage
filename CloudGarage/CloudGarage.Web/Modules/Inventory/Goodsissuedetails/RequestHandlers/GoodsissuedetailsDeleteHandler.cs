using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Inventory.GoodsissuedetailsRow;

namespace CloudGarage.Inventory
{
    public interface IGoodsissuedetailsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class GoodsissuedetailsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IGoodsissuedetailsDeleteHandler
    {
        public GoodsissuedetailsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}