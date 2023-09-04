using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Inspections.InspectionjobtypesRow>;
using MyRow = CloudGarage.Inspections.InspectionjobtypesRow;

namespace CloudGarage.Inspections
{
    public interface IInspectionjobtypesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class InspectionjobtypesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IInspectionjobtypesListHandler
    {
        public InspectionjobtypesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}