using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Quotations.QuotationdetailsRow>;
using MyRow = CloudGarage.Quotations.QuotationdetailsRow;

namespace CloudGarage.Quotations
{
    public interface IQuotationdetailsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class QuotationdetailsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IQuotationdetailsListHandler
    {
        public QuotationdetailsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}