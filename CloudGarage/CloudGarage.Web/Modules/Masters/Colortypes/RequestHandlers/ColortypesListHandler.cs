using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.ColortypesRow>;
using MyRow = CloudGarage.Masters.ColortypesRow;

namespace CloudGarage.Masters
{
    public interface IColortypesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ColortypesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IColortypesListHandler
    {
        public ColortypesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}