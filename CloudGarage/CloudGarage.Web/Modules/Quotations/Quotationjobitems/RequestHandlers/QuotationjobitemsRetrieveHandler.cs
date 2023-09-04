using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Quotations.QuotationjobitemsRow>;
using MyRow = CloudGarage.Quotations.QuotationjobitemsRow;

namespace CloudGarage.Quotations
{
    public interface IQuotationjobitemsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class QuotationjobitemsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IQuotationjobitemsRetrieveHandler
    {
        public QuotationjobitemsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}