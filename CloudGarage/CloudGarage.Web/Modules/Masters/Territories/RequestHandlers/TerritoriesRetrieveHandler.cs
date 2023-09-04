using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.TerritoriesRow>;
using MyRow = CloudGarage.Masters.TerritoriesRow;

namespace CloudGarage.Masters
{
    public interface ITerritoriesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class TerritoriesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITerritoriesRetrieveHandler
    {
        public TerritoriesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}