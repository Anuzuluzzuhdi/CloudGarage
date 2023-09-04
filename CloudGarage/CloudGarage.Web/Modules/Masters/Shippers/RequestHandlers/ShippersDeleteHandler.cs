using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.ShippersRow;

namespace CloudGarage.Masters
{
    public interface IShippersDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ShippersDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IShippersDeleteHandler
    {
        public ShippersDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}