using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.ColortypesRow>;
using MyRow = CloudGarage.Masters.ColortypesRow;

namespace CloudGarage.Masters
{
    public interface IColortypesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ColortypesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IColortypesRetrieveHandler
    {
        public ColortypesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}