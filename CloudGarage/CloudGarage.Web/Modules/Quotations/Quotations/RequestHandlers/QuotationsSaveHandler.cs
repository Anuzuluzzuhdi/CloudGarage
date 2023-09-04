using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Quotations.QuotationsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Quotations.QuotationsRow;

namespace CloudGarage.Quotations
{
    public interface IQuotationsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class QuotationsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IQuotationsSaveHandler
    {
        public QuotationsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}