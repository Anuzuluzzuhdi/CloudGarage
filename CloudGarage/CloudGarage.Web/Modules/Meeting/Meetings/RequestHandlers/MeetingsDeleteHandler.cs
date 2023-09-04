using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Meeting.MeetingsRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingsDeleteHandler
    {
        public MeetingsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}