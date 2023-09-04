using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.CashBank.SupplierpaymentRow>;
using MyRow = CloudGarage.CashBank.SupplierpaymentRow;

namespace CloudGarage.CashBank
{
    public interface ISupplierpaymentListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class SupplierpaymentListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISupplierpaymentListHandler
    {
        public SupplierpaymentListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}