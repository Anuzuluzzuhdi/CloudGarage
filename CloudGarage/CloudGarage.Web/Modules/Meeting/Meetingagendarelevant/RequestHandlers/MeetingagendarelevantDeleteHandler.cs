using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Meeting.MeetingagendarelevantRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingagendarelevantDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingagendarelevantDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingagendarelevantDeleteHandler
    {
        public MeetingagendarelevantDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}