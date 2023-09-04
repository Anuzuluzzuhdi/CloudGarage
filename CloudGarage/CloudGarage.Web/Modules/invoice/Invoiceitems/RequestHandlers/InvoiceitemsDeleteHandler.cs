using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.invoice.InvoiceitemsRow;

namespace CloudGarage.invoice
{
    public interface IInvoiceitemsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoiceitemsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IInvoiceitemsDeleteHandler
    {
        public InvoiceitemsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}