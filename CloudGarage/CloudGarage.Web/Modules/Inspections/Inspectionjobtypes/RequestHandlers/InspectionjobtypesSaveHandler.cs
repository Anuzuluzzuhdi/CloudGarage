using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Inspections.InspectionjobtypesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Inspections.InspectionjobtypesRow;

namespace CloudGarage.Inspections
{
    public interface IInspectionjobtypesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class InspectionjobtypesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IInspectionjobtypesSaveHandler
    {
        public InspectionjobtypesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}