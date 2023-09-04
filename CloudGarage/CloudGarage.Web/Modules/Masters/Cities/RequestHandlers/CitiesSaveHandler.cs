using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.CitiesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.CitiesRow;

namespace CloudGarage.Masters
{
    public interface ICitiesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CitiesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICitiesSaveHandler
    {
        public CitiesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}