using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.HumanResource.AttendanceRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.HumanResource.AttendanceRow;

namespace CloudGarage.HumanResource
{
    public interface IAttendanceSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AttendanceSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAttendanceSaveHandler
    {
        public AttendanceSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}