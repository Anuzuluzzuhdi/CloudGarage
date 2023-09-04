using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.JobCards.GatepassesRow>;
using MyRow = CloudGarage.JobCards.GatepassesRow;

namespace CloudGarage.JobCards
{
    public interface IGatepassesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class GatepassesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IGatepassesRetrieveHandler
    {
        public GatepassesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}