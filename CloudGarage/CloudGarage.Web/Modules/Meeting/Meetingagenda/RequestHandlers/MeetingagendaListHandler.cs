using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Meeting.MeetingagendaRow>;
using MyRow = CloudGarage.Meeting.MeetingagendaRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingagendaListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingagendaListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingagendaListHandler
    {
        public MeetingagendaListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}