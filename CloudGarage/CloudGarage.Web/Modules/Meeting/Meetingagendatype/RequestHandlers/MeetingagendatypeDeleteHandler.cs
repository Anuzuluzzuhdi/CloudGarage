using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Meeting.MeetingagendatypeRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingagendatypeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingagendatypeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingagendatypeDeleteHandler
    {
        public MeetingagendatypeDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}