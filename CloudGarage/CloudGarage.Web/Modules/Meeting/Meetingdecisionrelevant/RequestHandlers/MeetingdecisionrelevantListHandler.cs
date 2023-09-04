using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Meeting.MeetingdecisionrelevantRow>;
using MyRow = CloudGarage.Meeting.MeetingdecisionrelevantRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingdecisionrelevantListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingdecisionrelevantListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingdecisionrelevantListHandler
    {
        public MeetingdecisionrelevantListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}