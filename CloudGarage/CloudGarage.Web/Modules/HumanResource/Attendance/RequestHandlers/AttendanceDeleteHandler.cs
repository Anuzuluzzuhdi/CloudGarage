using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.HumanResource.AttendanceRow;

namespace CloudGarage.HumanResource
{
    public interface IAttendanceDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AttendanceDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAttendanceDeleteHandler
    {
        public AttendanceDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}