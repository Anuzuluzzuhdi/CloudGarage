using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.CashBank.ExpensesRow>;
using MyRow = CloudGarage.CashBank.ExpensesRow;

namespace CloudGarage.CashBank
{
    public interface IExpensesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ExpensesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IExpensesRetrieveHandler
    {
        public ExpensesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}