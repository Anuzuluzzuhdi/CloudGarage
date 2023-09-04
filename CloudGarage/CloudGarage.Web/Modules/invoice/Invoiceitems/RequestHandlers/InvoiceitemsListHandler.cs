using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.invoice.InvoiceitemsRow>;
using MyRow = CloudGarage.invoice.InvoiceitemsRow;

namespace CloudGarage.invoice
{
    public interface IInvoiceitemsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoiceitemsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IInvoiceitemsListHandler
    {
        public InvoiceitemsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}