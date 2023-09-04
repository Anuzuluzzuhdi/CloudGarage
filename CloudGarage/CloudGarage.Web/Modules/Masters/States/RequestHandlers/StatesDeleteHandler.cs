using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.StatesRow;

namespace CloudGarage.Masters
{
    public interface IStatesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class StatesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IStatesDeleteHandler
    {
        public StatesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}