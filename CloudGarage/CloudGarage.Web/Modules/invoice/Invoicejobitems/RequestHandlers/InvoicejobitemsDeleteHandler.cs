using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.invoice.InvoicejobitemsRow;

namespace CloudGarage.invoice
{
    public interface IInvoicejobitemsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoicejobitemsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IInvoicejobitemsDeleteHandler
    {
        public InvoicejobitemsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}