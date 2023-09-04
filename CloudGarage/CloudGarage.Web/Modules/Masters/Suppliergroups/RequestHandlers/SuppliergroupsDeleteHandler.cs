using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.SuppliergroupsRow;

namespace CloudGarage.Masters
{
    public interface ISuppliergroupsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class SuppliergroupsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ISuppliergroupsDeleteHandler
    {
        public SuppliergroupsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}