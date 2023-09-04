using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.HumanResource.AttendanceRow>;
using MyRow = CloudGarage.HumanResource.AttendanceRow;

namespace CloudGarage.HumanResource
{
    public interface IAttendanceListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AttendanceListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAttendanceListHandler
    {
        public AttendanceListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}