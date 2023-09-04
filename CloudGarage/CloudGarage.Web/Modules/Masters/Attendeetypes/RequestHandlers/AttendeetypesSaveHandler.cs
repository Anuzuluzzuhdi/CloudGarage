using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.AttendeetypesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.AttendeetypesRow;

namespace CloudGarage.Masters
{
    public interface IAttendeetypesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AttendeetypesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAttendeetypesSaveHandler
    {
        public AttendeetypesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}