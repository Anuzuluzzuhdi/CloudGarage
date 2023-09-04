using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Inspections.InspectionjobtypesRow>;
using MyRow = CloudGarage.Inspections.InspectionjobtypesRow;

namespace CloudGarage.Inspections
{
    public interface IInspectionjobtypesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class InspectionjobtypesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IInspectionjobtypesRetrieveHandler
    {
        public InspectionjobtypesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}