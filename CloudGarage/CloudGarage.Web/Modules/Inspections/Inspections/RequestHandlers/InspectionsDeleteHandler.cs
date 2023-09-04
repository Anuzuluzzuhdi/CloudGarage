using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Inspections.InspectionsRow;

namespace CloudGarage.Inspections
{
    public interface IInspectionsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class InspectionsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IInspectionsDeleteHandler
    {
        public InspectionsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}