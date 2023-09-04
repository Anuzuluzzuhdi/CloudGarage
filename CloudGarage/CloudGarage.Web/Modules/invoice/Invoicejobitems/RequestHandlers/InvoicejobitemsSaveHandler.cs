using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.invoice.InvoicejobitemsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.invoice.InvoicejobitemsRow;

namespace CloudGarage.invoice
{
    public interface IInvoicejobitemsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoicejobitemsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IInvoicejobitemsSaveHandler
    {
        public InvoicejobitemsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}