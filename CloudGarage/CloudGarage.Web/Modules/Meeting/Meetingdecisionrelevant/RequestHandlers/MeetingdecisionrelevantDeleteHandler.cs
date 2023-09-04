using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Meeting.MeetingdecisionrelevantRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingdecisionrelevantDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingdecisionrelevantDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingdecisionrelevantDeleteHandler
    {
        public MeetingdecisionrelevantDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}