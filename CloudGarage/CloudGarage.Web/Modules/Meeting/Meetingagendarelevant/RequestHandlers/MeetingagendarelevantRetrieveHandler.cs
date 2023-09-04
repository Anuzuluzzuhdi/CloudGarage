using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Meeting.MeetingagendarelevantRow>;
using MyRow = CloudGarage.Meeting.MeetingagendarelevantRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingagendarelevantRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingagendarelevantRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingagendarelevantRetrieveHandler
    {
        public MeetingagendarelevantRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}