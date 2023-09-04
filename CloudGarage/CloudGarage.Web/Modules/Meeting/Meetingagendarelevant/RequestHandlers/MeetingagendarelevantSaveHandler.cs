using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Meeting.MeetingagendarelevantRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Meeting.MeetingagendarelevantRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingagendarelevantSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingagendarelevantSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingagendarelevantSaveHandler
    {
        public MeetingagendarelevantSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}