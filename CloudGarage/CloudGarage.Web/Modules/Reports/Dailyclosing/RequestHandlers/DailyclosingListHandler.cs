using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Reports.DailyclosingRow>;
using MyRow = CloudGarage.Reports.DailyclosingRow;

namespace CloudGarage.Reports
{
    public interface IDailyclosingListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class DailyclosingListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDailyclosingListHandler
    {
        public DailyclosingListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}