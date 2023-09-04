using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.MeetingtypesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.MeetingtypesRow;

namespace CloudGarage.Masters
{
    public interface IMeetingtypesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingtypesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingtypesSaveHandler
    {
        public MeetingtypesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}