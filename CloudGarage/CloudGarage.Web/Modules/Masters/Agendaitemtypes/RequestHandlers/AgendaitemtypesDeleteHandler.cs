using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.AgendaitemtypesRow;

namespace CloudGarage.Masters
{
    public interface IAgendaitemtypesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AgendaitemtypesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAgendaitemtypesDeleteHandler
    {
        public AgendaitemtypesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}