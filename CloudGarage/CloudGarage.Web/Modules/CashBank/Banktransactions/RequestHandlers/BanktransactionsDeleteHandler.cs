using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.CashBank.BanktransactionsRow;

namespace CloudGarage.CashBank
{
    public interface IBanktransactionsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class BanktransactionsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBanktransactionsDeleteHandler
    {
        public BanktransactionsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}