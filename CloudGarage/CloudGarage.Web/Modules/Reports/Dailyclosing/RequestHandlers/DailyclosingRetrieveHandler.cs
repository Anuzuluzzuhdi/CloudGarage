using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Reports.DailyclosingRow>;
using MyRow = CloudGarage.Reports.DailyclosingRow;

namespace CloudGarage.Reports
{
    public interface IDailyclosingRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class DailyclosingRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDailyclosingRetrieveHandler
    {
        public DailyclosingRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}