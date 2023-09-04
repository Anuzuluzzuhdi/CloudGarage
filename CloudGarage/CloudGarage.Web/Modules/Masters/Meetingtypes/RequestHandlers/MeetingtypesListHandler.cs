using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.MeetingtypesRow>;
using MyRow = CloudGarage.Masters.MeetingtypesRow;

namespace CloudGarage.Masters
{
    public interface IMeetingtypesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingtypesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingtypesListHandler
    {
        public MeetingtypesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}