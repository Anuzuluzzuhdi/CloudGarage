using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.TerritoriesRow>;
using MyRow = CloudGarage.Masters.TerritoriesRow;

namespace CloudGarage.Masters
{
    public interface ITerritoriesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class TerritoriesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITerritoriesListHandler
    {
        public TerritoriesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}