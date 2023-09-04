using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Financial.DebitvoucherRow>;
using MyRow = CloudGarage.Financial.DebitvoucherRow;

namespace CloudGarage.Financial
{
    public interface IDebitvoucherRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class DebitvoucherRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDebitvoucherRetrieveHandler
    {
        public DebitvoucherRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}