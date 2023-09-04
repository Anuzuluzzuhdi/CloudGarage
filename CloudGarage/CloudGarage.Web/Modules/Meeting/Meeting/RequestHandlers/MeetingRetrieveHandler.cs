using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Meeting.MeetingRow>;
using MyRow = CloudGarage.Meeting.MeetingRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingRetrieveHandler
    {
        public MeetingRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}