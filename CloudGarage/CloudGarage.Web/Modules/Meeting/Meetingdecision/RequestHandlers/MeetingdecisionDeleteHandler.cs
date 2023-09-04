using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Meeting.MeetingdecisionRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingdecisionDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingdecisionDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingdecisionDeleteHandler
    {
        public MeetingdecisionDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}