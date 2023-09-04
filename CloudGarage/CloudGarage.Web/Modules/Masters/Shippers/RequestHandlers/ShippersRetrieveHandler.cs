using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.ShippersRow>;
using MyRow = CloudGarage.Masters.ShippersRow;

namespace CloudGarage.Masters
{
    public interface IShippersRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ShippersRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IShippersRetrieveHandler
    {
        public ShippersRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}