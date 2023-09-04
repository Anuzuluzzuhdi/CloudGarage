using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.AttendeetypesRow>;
using MyRow = CloudGarage.Masters.AttendeetypesRow;

namespace CloudGarage.Masters
{
    public interface IAttendeetypesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AttendeetypesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAttendeetypesListHandler
    {
        public AttendeetypesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}