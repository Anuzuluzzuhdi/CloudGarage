using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Inspections.InspectionsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Inspections.InspectionsRow;

namespace CloudGarage.Inspections
{
    public interface IInspectionsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class InspectionsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IInspectionsSaveHandler
    {
        public InspectionsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}