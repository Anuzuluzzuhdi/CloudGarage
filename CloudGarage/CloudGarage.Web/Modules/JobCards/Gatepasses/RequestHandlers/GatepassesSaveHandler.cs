using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.JobCards.GatepassesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.JobCards.GatepassesRow;

namespace CloudGarage.JobCards
{
    public interface IGatepassesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class GatepassesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IGatepassesSaveHandler
    {
        public GatepassesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}