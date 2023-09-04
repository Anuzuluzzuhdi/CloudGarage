using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.AssemblytypesRow>;
using MyRow = CloudGarage.Masters.AssemblytypesRow;

namespace CloudGarage.Masters
{
    public interface IAssemblytypesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AssemblytypesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAssemblytypesRetrieveHandler
    {
        public AssemblytypesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}