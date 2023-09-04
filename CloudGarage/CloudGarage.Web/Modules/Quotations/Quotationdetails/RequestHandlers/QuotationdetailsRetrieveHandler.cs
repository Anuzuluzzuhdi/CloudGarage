using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Quotations.QuotationdetailsRow>;
using MyRow = CloudGarage.Quotations.QuotationdetailsRow;

namespace CloudGarage.Quotations
{
    public interface IQuotationdetailsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class QuotationdetailsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IQuotationdetailsRetrieveHandler
    {
        public QuotationdetailsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}