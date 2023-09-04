using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Meeting.MeetingdecisionRow>;
using MyRow = CloudGarage.Meeting.MeetingdecisionRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingdecisionRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingdecisionRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingdecisionRetrieveHandler
    {
        public MeetingdecisionRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}