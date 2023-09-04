using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Quotations.QuotationsRow;

namespace CloudGarage.Quotations
{
    public interface IQuotationsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class QuotationsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IQuotationsDeleteHandler
    {
        public QuotationsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}