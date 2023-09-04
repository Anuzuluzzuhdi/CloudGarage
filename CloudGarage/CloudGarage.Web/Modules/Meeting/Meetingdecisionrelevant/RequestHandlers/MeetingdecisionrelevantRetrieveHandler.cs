using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Meeting.MeetingdecisionrelevantRow>;
using MyRow = CloudGarage.Meeting.MeetingdecisionrelevantRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingdecisionrelevantRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingdecisionrelevantRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingdecisionrelevantRetrieveHandler
    {
        public MeetingdecisionrelevantRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}