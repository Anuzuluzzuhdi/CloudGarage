using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.invoice.InvoicejobitemsRow>;
using MyRow = CloudGarage.invoice.InvoicejobitemsRow;

namespace CloudGarage.invoice
{
    public interface IInvoicejobitemsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoicejobitemsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IInvoicejobitemsRetrieveHandler
    {
        public InvoicejobitemsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}