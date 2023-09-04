using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.SuppliergroupsRow>;
using MyRow = CloudGarage.Masters.SuppliergroupsRow;

namespace CloudGarage.Masters
{
    public interface ISuppliergroupsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class SuppliergroupsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISuppliergroupsListHandler
    {
        public SuppliergroupsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}