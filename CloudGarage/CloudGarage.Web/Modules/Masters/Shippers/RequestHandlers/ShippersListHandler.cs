using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.ShippersRow>;
using MyRow = CloudGarage.Masters.ShippersRow;

namespace CloudGarage.Masters
{
    public interface IShippersListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ShippersListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IShippersListHandler
    {
        public ShippersListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}