using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.FueltypesRow>;
using MyRow = CloudGarage.Masters.FueltypesRow;

namespace CloudGarage.Masters
{
    public interface IFueltypesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class FueltypesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IFueltypesListHandler
    {
        public FueltypesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}