using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.ColortypesRow;

namespace CloudGarage.Masters
{
    public interface IColortypesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ColortypesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IColortypesDeleteHandler
    {
        public ColortypesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}