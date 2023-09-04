using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Meeting.MeetingdecisionrelevantRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Meeting.MeetingdecisionrelevantRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingdecisionrelevantSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingdecisionrelevantSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingdecisionrelevantSaveHandler
    {
        public MeetingdecisionrelevantSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}