using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.CashBank.CashadjustmentRow;

namespace CloudGarage.CashBank
{
    public interface ICashadjustmentDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class CashadjustmentDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICashadjustmentDeleteHandler
    {
        public CashadjustmentDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}