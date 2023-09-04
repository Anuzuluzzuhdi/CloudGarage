using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.RegionsRow;

namespace CloudGarage.Masters
{
    public interface IRegionsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class RegionsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IRegionsDeleteHandler
    {
        public RegionsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}