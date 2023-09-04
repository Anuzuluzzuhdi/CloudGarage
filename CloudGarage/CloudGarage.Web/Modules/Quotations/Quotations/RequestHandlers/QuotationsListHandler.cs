using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Quotations.QuotationsRow>;
using MyRow = CloudGarage.Quotations.QuotationsRow;

namespace CloudGarage.Quotations
{
    public interface IQuotationsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class QuotationsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IQuotationsListHandler
    {
        public QuotationsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}