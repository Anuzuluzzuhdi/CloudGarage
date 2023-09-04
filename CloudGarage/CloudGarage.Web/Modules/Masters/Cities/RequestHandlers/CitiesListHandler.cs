using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.CitiesRow>;
using MyRow = CloudGarage.Masters.CitiesRow;

namespace CloudGarage.Masters
{
    public interface ICitiesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CitiesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICitiesListHandler
    {
        public CitiesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}