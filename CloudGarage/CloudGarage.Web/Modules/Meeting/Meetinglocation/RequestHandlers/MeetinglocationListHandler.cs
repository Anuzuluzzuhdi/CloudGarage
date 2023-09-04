using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Meeting.MeetinglocationRow>;
using MyRow = CloudGarage.Meeting.MeetinglocationRow;

namespace CloudGarage.Meeting
{
    public interface IMeetinglocationListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetinglocationListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMeetinglocationListHandler
    {
        public MeetinglocationListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}