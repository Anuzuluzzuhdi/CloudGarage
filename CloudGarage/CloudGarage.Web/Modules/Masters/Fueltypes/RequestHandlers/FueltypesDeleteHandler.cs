using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.FueltypesRow;

namespace CloudGarage.Masters
{
    public interface IFueltypesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class FueltypesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IFueltypesDeleteHandler
    {
        public FueltypesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}