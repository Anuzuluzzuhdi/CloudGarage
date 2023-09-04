using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Inspections.InspectionsRow>;
using MyRow = CloudGarage.Inspections.InspectionsRow;

namespace CloudGarage.Inspections
{
    public interface IInspectionsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class InspectionsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IInspectionsListHandler
    {
        public InspectionsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}