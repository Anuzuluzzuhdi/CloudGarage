using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.invoice.InvoicesRow;

namespace CloudGarage.invoice
{
    public interface IInvoicesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoicesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IInvoicesDeleteHandler
    {
        public InvoicesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}