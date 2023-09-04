using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.AttendancestatusesRow;

namespace CloudGarage.Masters
{
    public interface IAttendancestatusesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AttendancestatusesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAttendancestatusesDeleteHandler
    {
        public AttendancestatusesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}