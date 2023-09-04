using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Meeting.MeetingdecisionRow>;
using MyRow = CloudGarage.Meeting.MeetingdecisionRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingdecisionListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingdecisionListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingdecisionListHandler
    {
        public MeetingdecisionListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}