using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Meeting.MeetinglocationRow>;
using MyRow = CloudGarage.Meeting.MeetinglocationRow;

namespace CloudGarage.Meeting
{
    public interface IMeetinglocationRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetinglocationRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetinglocationRetrieveHandler
    {
        public MeetinglocationRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}