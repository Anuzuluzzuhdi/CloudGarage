using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Inventory.GoodsissueRow>;
using MyRow = CloudGarage.Inventory.GoodsissueRow;

namespace CloudGarage.Inventory
{
    public interface IGoodsissueListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class GoodsissueListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IGoodsissueListHandler
    {
        public GoodsissueListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}