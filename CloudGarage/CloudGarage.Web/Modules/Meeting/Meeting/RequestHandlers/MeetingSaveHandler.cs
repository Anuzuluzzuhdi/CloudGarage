using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Meeting.MeetingRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Meeting.MeetingRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingSaveHandler
    {
        public MeetingSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}