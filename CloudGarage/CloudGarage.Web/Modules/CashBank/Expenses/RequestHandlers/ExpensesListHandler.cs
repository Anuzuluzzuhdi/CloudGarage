using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.CashBank.ExpensesRow>;
using MyRow = CloudGarage.CashBank.ExpensesRow;

namespace CloudGarage.CashBank
{
    public interface IExpensesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ExpensesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IExpensesListHandler
    {
        public ExpensesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}