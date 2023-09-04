using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Meeting.MeetingsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Meeting.MeetingsRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingsSaveHandler
    {
        public MeetingsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}