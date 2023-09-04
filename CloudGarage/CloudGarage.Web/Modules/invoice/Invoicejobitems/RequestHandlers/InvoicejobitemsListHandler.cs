using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.invoice.InvoicejobitemsRow>;
using MyRow = CloudGarage.invoice.InvoicejobitemsRow;

namespace CloudGarage.invoice
{
    public interface IInvoicejobitemsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoicejobitemsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IInvoicejobitemsListHandler
    {
        public InvoicejobitemsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}