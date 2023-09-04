using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Meeting.MeetinglocationRow;

namespace CloudGarage.Meeting
{
    public interface IMeetinglocationDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetinglocationDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMeetinglocationDeleteHandler
    {
        public MeetinglocationDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}