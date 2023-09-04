using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.ExpensestypesRow;

namespace CloudGarage.Masters
{
    public interface IExpensestypesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ExpensestypesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IExpensestypesDeleteHandler
    {
        public ExpensestypesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}