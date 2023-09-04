using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Quotations.QuotationjobitemsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Quotations.QuotationjobitemsRow;

namespace CloudGarage.Quotations
{
    public interface IQuotationjobitemsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class QuotationjobitemsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IQuotationjobitemsSaveHandler
    {
        public QuotationjobitemsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}