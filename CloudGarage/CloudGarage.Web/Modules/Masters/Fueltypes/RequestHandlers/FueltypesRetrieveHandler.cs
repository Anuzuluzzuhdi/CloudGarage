using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.FueltypesRow>;
using MyRow = CloudGarage.Masters.FueltypesRow;

namespace CloudGarage.Masters
{
    public interface IFueltypesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class FueltypesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IFueltypesRetrieveHandler
    {
        public FueltypesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}