using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Quotations.QuotationjobitemsRow>;
using MyRow = CloudGarage.Quotations.QuotationjobitemsRow;

namespace CloudGarage.Quotations
{
    public interface IQuotationjobitemsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class QuotationjobitemsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IQuotationjobitemsListHandler
    {
        public QuotationjobitemsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}