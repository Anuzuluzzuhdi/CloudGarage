using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.AgendaitemtypesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.AgendaitemtypesRow;

namespace CloudGarage.Masters
{
    public interface IAgendaitemtypesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AgendaitemtypesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAgendaitemtypesSaveHandler
    {
        public AgendaitemtypesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}