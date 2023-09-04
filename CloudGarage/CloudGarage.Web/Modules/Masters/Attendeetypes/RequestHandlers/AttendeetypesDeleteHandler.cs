using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.AttendeetypesRow;

namespace CloudGarage.Masters
{
    public interface IAttendeetypesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AttendeetypesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAttendeetypesDeleteHandler
    {
        public AttendeetypesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}