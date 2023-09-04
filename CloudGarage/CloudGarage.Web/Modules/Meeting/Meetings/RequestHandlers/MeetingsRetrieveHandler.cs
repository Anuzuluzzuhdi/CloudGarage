using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Meeting.MeetingsRow>;
using MyRow = CloudGarage.Meeting.MeetingsRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingsRetrieveHandler
    {
        public MeetingsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}