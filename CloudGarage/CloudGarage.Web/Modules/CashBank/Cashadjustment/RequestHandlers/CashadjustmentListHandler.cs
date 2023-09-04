using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.CashBank.CashadjustmentRow>;
using MyRow = CloudGarage.CashBank.CashadjustmentRow;

namespace CloudGarage.CashBank
{
    public interface ICashadjustmentListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CashadjustmentListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICashadjustmentListHandler
    {
        public CashadjustmentListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}