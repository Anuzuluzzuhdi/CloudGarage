using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Inventory.GoodsissuedetailsRow>;
using MyRow = CloudGarage.Inventory.GoodsissuedetailsRow;

namespace CloudGarage.Inventory
{
    public interface IGoodsissuedetailsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class GoodsissuedetailsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IGoodsissuedetailsListHandler
    {
        public GoodsissuedetailsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}