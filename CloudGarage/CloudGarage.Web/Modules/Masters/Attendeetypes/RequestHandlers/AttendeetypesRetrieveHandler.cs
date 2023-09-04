using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.AttendeetypesRow>;
using MyRow = CloudGarage.Masters.AttendeetypesRow;

namespace CloudGarage.Masters
{
    public interface IAttendeetypesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AttendeetypesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAttendeetypesRetrieveHandler
    {
        public AttendeetypesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}