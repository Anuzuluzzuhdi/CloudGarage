using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.CustomergroupsRow>;
using MyRow = CloudGarage.Masters.CustomergroupsRow;

namespace CloudGarage.Masters
{
    public interface ICustomergroupsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CustomergroupsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICustomergroupsListHandler
    {
        public CustomergroupsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}