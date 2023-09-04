using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.invoice.InvoiceitemsRow>;
using MyRow = CloudGarage.invoice.InvoiceitemsRow;

namespace CloudGarage.invoice
{
    public interface IInvoiceitemsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoiceitemsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IInvoiceitemsRetrieveHandler
    {
        public InvoiceitemsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}