using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.CashBank.SupplierpaymentRow>;
using MyRow = CloudGarage.CashBank.SupplierpaymentRow;

namespace CloudGarage.CashBank
{
    public interface ISupplierpaymentRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class SupplierpaymentRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISupplierpaymentRetrieveHandler
    {
        public SupplierpaymentRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}