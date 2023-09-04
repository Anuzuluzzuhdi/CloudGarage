using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.ExpensestypesRow>;
using MyRow = CloudGarage.Masters.ExpensestypesRow;

namespace CloudGarage.Masters
{
    public interface IExpensestypesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ExpensestypesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IExpensestypesListHandler
    {
        public ExpensestypesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}