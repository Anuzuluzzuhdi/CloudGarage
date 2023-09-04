using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.CustomergroupsRow>;
using MyRow = CloudGarage.Masters.CustomergroupsRow;

namespace CloudGarage.Masters
{
    public interface ICustomergroupsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CustomergroupsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICustomergroupsRetrieveHandler
    {
        public CustomergroupsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}