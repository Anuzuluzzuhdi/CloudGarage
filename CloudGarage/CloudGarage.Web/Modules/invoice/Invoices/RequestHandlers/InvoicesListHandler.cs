using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.invoice.InvoicesRow>;
using MyRow = CloudGarage.invoice.InvoicesRow;

namespace CloudGarage.invoice
{
    public interface IInvoicesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoicesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IInvoicesListHandler
    {
        public InvoicesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}