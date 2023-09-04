using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.AssemblytypesRow;

namespace CloudGarage.Masters
{
    public interface IAssemblytypesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AssemblytypesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAssemblytypesDeleteHandler
    {
        public AssemblytypesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}