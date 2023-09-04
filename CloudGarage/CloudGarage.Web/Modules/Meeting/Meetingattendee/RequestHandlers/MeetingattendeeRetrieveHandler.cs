using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Meeting.MeetingattendeeRow>;
using MyRow = CloudGarage.Meeting.MeetingattendeeRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingattendeeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingattendeeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingattendeeRetrieveHandler
    {
        public MeetingattendeeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}