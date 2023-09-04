using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Quotations.QuotationjobitemsRow;

namespace CloudGarage.Quotations
{
    public interface IQuotationjobitemsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class QuotationjobitemsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IQuotationjobitemsDeleteHandler
    {
        public QuotationjobitemsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}