using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.AttendancestatusesRow>;
using MyRow = CloudGarage.Masters.AttendancestatusesRow;

namespace CloudGarage.Masters
{
    public interface IAttendancestatusesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AttendancestatusesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAttendancestatusesRetrieveHandler
    {
        public AttendancestatusesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}