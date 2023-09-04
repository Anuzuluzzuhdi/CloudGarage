using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Meeting.MeetingRow>;
using MyRow = CloudGarage.Meeting.MeetingRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingListHandler
    {
        public MeetingListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}