using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.AssemblytypesRow>;
using MyRow = CloudGarage.Masters.AssemblytypesRow;

namespace CloudGarage.Masters
{
    public interface IAssemblytypesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AssemblytypesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAssemblytypesListHandler
    {
        public AssemblytypesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}