using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.MeetingtypesRow>;
using MyRow = CloudGarage.Masters.MeetingtypesRow;

namespace CloudGarage.Masters
{
    public interface IMeetingtypesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeetingtypesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMeetingtypesRetrieveHandler
    {
        public MeetingtypesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}