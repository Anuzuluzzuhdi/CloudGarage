using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Financial.ContravoucherRow>;
using MyRow = CloudGarage.Financial.ContravoucherRow;

namespace CloudGarage.Financial
{
    public interface IContravoucherRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ContravoucherRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IContravoucherRetrieveHandler
    {
        public ContravoucherRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}