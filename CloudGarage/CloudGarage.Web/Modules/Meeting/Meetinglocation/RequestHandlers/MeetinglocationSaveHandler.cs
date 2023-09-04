using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Meeting.MeetinglocationRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Meeting.MeetinglocationRow;

namespace CloudGarage.Meeting
{
    public interface IMeetinglocationSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetinglocationSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetinglocationSaveHandler
    {
        public MeetinglocationSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}