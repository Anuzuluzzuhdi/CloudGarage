using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Inspections.InspectionchecklistRow>;
using MyRow = CloudGarage.Inspections.InspectionchecklistRow;

namespace CloudGarage.Inspections
{
    public interface IInspectionchecklistRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class InspectionchecklistRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IInspectionchecklistRetrieveHandler
    {
        public InspectionchecklistRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}