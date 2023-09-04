using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Quotations.QuotationsRow>;
using MyRow = CloudGarage.Quotations.QuotationsRow;

namespace CloudGarage.Quotations
{
    public interface IQuotationsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class QuotationsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IQuotationsRetrieveHandler
    {
        public QuotationsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}