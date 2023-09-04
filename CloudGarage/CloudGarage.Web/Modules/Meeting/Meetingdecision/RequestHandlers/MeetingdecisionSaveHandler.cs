using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Meeting.MeetingdecisionRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Meeting.MeetingdecisionRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingdecisionSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingdecisionSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingdecisionSaveHandler
    {
        public MeetingdecisionSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}