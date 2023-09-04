using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Inspections.InspectionsRow>;
using MyRow = CloudGarage.Inspections.InspectionsRow;

namespace CloudGarage.Inspections
{
    public interface IInspectionsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class InspectionsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IInspectionsRetrieveHandler
    {
        public InspectionsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}