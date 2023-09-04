using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.FueltypesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.FueltypesRow;

namespace CloudGarage.Masters
{
    public interface IFueltypesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class FueltypesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IFueltypesSaveHandler
    {
        public FueltypesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}