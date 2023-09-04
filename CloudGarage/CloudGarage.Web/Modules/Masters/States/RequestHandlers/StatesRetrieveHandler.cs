using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.StatesRow>;
using MyRow = CloudGarage.Masters.StatesRow;

namespace CloudGarage.Masters
{
    public interface IStatesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class StatesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IStatesRetrieveHandler
    {
        public StatesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}