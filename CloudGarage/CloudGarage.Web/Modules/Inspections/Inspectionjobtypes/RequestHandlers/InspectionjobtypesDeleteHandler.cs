using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Inspections.InspectionjobtypesRow;

namespace CloudGarage.Inspections
{
    public interface IInspectionjobtypesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class InspectionjobtypesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IInspectionjobtypesDeleteHandler
    {
        public InspectionjobtypesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}