using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.StatesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.StatesRow;

namespace CloudGarage.Masters
{
    public interface IStatesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class StatesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IStatesSaveHandler
    {
        public StatesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}