using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Meeting.MeetingattendeeRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingattendeeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingattendeeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingattendeeDeleteHandler
    {
        public MeetingattendeeDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}