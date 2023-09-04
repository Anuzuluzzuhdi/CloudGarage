using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Reports.DailyclosingRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Reports.DailyclosingRow;

namespace CloudGarage.Reports
{
    public interface IDailyclosingSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class DailyclosingSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDailyclosingSaveHandler
    {
        public DailyclosingSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}