using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.AttendancestatusesRow>;
using MyRow = CloudGarage.Masters.AttendancestatusesRow;

namespace CloudGarage.Masters
{
    public interface IAttendancestatusesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AttendancestatusesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAttendancestatusesListHandler
    {
        public AttendancestatusesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}