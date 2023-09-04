using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.MeetingtypesRow;

namespace CloudGarage.Masters
{
    public interface IMeetingtypesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingtypesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingtypesDeleteHandler
    {
        public MeetingtypesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}