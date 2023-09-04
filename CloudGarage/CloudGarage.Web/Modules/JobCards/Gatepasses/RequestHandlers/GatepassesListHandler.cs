using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.JobCards.GatepassesRow>;
using MyRow = CloudGarage.JobCards.GatepassesRow;

namespace CloudGarage.JobCards
{
    public interface IGatepassesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class GatepassesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IGatepassesListHandler
    {
        public GatepassesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}