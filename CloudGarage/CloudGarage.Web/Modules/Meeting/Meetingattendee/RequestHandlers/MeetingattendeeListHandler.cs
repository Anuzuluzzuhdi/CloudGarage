using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Meeting.MeetingattendeeRow>;
using MyRow = CloudGarage.Meeting.MeetingattendeeRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingattendeeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingattendeeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingattendeeListHandler
    {
        public MeetingattendeeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}