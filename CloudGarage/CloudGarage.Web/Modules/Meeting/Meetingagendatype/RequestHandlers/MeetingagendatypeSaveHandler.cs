using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Meeting.MeetingagendatypeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Meeting.MeetingagendatypeRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingagendatypeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingagendatypeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingagendatypeSaveHandler
    {
        public MeetingagendatypeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}