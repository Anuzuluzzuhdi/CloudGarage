using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Financial.CreditvoucherRow>;
using MyRow = CloudGarage.Financial.CreditvoucherRow;

namespace CloudGarage.Financial
{
    public interface ICreditvoucherRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CreditvoucherRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICreditvoucherRetrieveHandler
    {
        public CreditvoucherRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}