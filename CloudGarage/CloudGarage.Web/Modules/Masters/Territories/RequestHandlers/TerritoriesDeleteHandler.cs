using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.TerritoriesRow;

namespace CloudGarage.Masters
{
    public interface ITerritoriesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class TerritoriesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITerritoriesDeleteHandler
    {
        public TerritoriesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}