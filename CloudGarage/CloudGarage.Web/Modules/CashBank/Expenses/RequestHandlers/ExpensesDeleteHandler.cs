using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.CashBank.ExpensesRow;

namespace CloudGarage.CashBank
{
    public interface IExpensesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ExpensesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IExpensesDeleteHandler
    {
        public ExpensesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}