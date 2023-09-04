using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.ExpensestypesRow>;
using MyRow = CloudGarage.Masters.ExpensestypesRow;

namespace CloudGarage.Masters
{
    public interface IExpensestypesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ExpensestypesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IExpensestypesRetrieveHandler
    {
        public ExpensestypesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}