using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Quotations.QuotationdetailsRow;

namespace CloudGarage.Quotations
{
    public interface IQuotationdetailsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class QuotationdetailsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IQuotationdetailsDeleteHandler
    {
        public QuotationdetailsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}