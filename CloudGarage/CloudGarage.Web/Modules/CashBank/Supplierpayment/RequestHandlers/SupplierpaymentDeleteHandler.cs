using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.CashBank.SupplierpaymentRow;

namespace CloudGarage.CashBank
{
    public interface ISupplierpaymentDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class SupplierpaymentDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ISupplierpaymentDeleteHandler
    {
        public SupplierpaymentDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}