using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Meeting.MeetingagendaRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Meeting.MeetingagendaRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingagendaSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingagendaSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingagendaSaveHandler
    {
        public MeetingagendaSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}