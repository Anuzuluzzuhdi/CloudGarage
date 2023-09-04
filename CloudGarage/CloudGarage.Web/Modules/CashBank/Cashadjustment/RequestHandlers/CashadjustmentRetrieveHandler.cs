using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.CashBank.CashadjustmentRow>;
using MyRow = CloudGarage.CashBank.CashadjustmentRow;

namespace CloudGarage.CashBank
{
    public interface ICashadjustmentRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CashadjustmentRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICashadjustmentRetrieveHandler
    {
        public CashadjustmentRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}