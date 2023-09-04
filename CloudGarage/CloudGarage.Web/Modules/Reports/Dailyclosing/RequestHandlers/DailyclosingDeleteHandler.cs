using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Reports.DailyclosingRow;

namespace CloudGarage.Reports
{
    public interface IDailyclosingDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class DailyclosingDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDailyclosingDeleteHandler
    {
        public DailyclosingDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}