using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Meeting.MeetingattendeeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Meeting.MeetingattendeeRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingattendeeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingattendeeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingattendeeSaveHandler
    {
        public MeetingattendeeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}