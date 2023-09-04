using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.AgendaitemtypesRow>;
using MyRow = CloudGarage.Masters.AgendaitemtypesRow;

namespace CloudGarage.Masters
{
    public interface IAgendaitemtypesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AgendaitemtypesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAgendaitemtypesRetrieveHandler
    {
        public AgendaitemtypesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}