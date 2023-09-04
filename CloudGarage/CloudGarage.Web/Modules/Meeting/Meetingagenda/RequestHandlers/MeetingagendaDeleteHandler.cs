using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Meeting.MeetingagendaRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingagendaDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingagendaDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingagendaDeleteHandler
    {
        public MeetingagendaDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}