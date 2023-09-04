using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Quotations.QuotationdetailsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Quotations.QuotationdetailsRow;

namespace CloudGarage.Quotations
{
    public interface IQuotationdetailsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class QuotationdetailsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IQuotationdetailsSaveHandler
    {
        public QuotationdetailsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}