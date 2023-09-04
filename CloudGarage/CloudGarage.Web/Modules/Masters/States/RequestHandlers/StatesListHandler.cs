using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.StatesRow>;
using MyRow = CloudGarage.Masters.StatesRow;

namespace CloudGarage.Masters
{
    public interface IStatesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class StatesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IStatesListHandler
    {
        public StatesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}