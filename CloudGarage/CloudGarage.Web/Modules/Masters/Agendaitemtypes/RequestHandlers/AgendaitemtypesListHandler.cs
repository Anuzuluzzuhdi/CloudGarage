using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.AgendaitemtypesRow>;
using MyRow = CloudGarage.Masters.AgendaitemtypesRow;

namespace CloudGarage.Masters
{
    public interface IAgendaitemtypesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AgendaitemtypesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAgendaitemtypesListHandler
    {
        public AgendaitemtypesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}