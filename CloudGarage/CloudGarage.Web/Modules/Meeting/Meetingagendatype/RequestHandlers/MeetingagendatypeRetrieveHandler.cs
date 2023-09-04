using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Meeting.MeetingagendatypeRow>;
using MyRow = CloudGarage.Meeting.MeetingagendatypeRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingagendatypeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingagendatypeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingagendatypeRetrieveHandler
    {
        public MeetingagendatypeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}