using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.CitiesRow;

namespace CloudGarage.Masters
{
    public interface ICitiesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class CitiesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICitiesDeleteHandler
    {
        public CitiesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}