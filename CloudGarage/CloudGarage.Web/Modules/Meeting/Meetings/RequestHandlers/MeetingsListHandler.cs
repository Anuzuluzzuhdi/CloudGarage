using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Meeting.MeetingsRow>;
using MyRow = CloudGarage.Meeting.MeetingsRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingsListHandler
    {
        public MeetingsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}