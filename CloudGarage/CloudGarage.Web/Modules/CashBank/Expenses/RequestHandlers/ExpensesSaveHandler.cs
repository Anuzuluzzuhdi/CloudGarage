using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.CashBank.ExpensesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.CashBank.ExpensesRow;

namespace CloudGarage.CashBank
{
    public interface IExpensesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ExpensesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IExpensesSaveHandler
    {
        public ExpensesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}