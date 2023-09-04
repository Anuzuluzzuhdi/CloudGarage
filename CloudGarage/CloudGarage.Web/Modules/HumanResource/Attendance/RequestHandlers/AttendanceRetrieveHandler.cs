using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.HumanResource.AttendanceRow>;
using MyRow = CloudGarage.HumanResource.AttendanceRow;

namespace CloudGarage.HumanResource
{
    public interface IAttendanceRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AttendanceRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAttendanceRetrieveHandler
    {
        public AttendanceRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}