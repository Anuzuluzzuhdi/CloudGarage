using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Inspections.InspectionchecklistRow>;
using MyRow = CloudGarage.Inspections.InspectionchecklistRow;

namespace CloudGarage.Inspections
{
    public interface IInspectionchecklistListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class InspectionchecklistListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IInspectionchecklistListHandler
    {
        public InspectionchecklistListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}