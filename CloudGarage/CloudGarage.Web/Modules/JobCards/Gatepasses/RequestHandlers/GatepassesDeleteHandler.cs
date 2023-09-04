using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.JobCards.GatepassesRow;

namespace CloudGarage.JobCards
{
    public interface IGatepassesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class GatepassesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IGatepassesDeleteHandler
    {
        public GatepassesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}