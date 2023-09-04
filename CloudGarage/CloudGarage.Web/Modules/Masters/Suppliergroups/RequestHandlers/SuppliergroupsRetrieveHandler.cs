using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.SuppliergroupsRow>;
using MyRow = CloudGarage.Masters.SuppliergroupsRow;

namespace CloudGarage.Masters
{
    public interface ISuppliergroupsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class SuppliergroupsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISuppliergroupsRetrieveHandler
    {
        public SuppliergroupsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}