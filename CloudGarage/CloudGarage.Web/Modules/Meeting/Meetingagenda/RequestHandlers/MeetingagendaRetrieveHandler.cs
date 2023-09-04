using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Meeting.MeetingagendaRow>;
using MyRow = CloudGarage.Meeting.MeetingagendaRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingagendaRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingagendaRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingagendaRetrieveHandler
    {
        public MeetingagendaRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}