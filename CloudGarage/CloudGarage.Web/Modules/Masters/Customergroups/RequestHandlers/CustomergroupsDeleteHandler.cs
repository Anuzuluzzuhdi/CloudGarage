using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.CustomergroupsRow;

namespace CloudGarage.Masters
{
    public interface ICustomergroupsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class CustomergroupsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICustomergroupsDeleteHandler
    {
        public CustomergroupsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}