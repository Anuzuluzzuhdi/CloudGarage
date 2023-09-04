using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.AttendancestatusesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.AttendancestatusesRow;

namespace CloudGarage.Masters
{
    public interface IAttendancestatusesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AttendancestatusesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAttendancestatusesSaveHandler
    {
        public AttendancestatusesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}