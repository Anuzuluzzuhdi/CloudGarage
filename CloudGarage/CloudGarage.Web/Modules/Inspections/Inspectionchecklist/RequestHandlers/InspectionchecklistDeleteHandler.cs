using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Inspections.InspectionchecklistRow;

namespace CloudGarage.Inspections
{
    public interface IInspectionchecklistDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class InspectionchecklistDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IInspectionchecklistDeleteHandler
    {
        public InspectionchecklistDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}