using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.invoice.InvoicesRow>;
using MyRow = CloudGarage.invoice.InvoicesRow;

namespace CloudGarage.invoice
{
    public interface IInvoicesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoicesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IInvoicesRetrieveHandler
    {
        public InvoicesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}