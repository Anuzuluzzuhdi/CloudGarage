using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.CitiesRow>;
using MyRow = CloudGarage.Masters.CitiesRow;

namespace CloudGarage.Masters
{
    public interface ICitiesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CitiesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICitiesRetrieveHandler
    {
        public CitiesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}