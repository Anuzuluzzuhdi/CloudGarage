using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Meeting.MeetingagendatypeRow>;
using MyRow = CloudGarage.Meeting.MeetingagendatypeRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingagendatypeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingagendatypeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingagendatypeListHandler
    {
        public MeetingagendatypeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}