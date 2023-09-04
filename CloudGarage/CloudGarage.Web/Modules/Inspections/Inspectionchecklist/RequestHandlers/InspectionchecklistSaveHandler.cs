using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Inspections.InspectionchecklistRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Inspections.InspectionchecklistRow;

namespace CloudGarage.Inspections
{
    public interface IInspectionchecklistSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class InspectionchecklistSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IInspectionchecklistSaveHandler
    {
        public InspectionchecklistSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}