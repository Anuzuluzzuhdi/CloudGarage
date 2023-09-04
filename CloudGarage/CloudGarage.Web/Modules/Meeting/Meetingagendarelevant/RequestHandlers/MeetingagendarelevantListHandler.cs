using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Meeting.MeetingagendarelevantRow>;
using MyRow = CloudGarage.Meeting.MeetingagendarelevantRow;

namespace CloudGarage.Meeting
{
    public interface IMeetingagendarelevantListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingagendarelevantListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingagendarelevantListHandler
    {
        public MeetingagendarelevantListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}