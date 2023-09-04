using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.invoice.InvoiceitemsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.invoice.InvoiceitemsRow;

namespace CloudGarage.invoice
{
    public interface IInvoiceitemsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoiceitemsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IInvoiceitemsSaveHandler
    {
        public InvoiceitemsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}