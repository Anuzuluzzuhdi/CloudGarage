using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.ExpensestypesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.ExpensestypesRow;

namespace CloudGarage.Masters
{
    public interface IExpensestypesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ExpensestypesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IExpensestypesSaveHandler
    {
        public ExpensestypesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}