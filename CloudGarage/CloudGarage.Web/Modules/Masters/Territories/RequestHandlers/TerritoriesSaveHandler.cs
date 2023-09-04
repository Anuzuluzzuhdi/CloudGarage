using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.TerritoriesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.TerritoriesRow;

namespace CloudGarage.Masters
{
    public interface ITerritoriesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class TerritoriesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITerritoriesSaveHandler
    {
        public TerritoriesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}