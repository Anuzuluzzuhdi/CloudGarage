using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.invoice.InvoicesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.invoice.InvoicesRow;

namespace CloudGarage.invoice
{
    public interface IInvoicesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoicesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IInvoicesSaveHandler
    {
        public InvoicesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}