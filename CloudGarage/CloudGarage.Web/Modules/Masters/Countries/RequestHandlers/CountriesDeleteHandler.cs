using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.CountriesRow;

namespace CloudGarage.Masters
{
    public interface ICountriesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class CountriesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICountriesDeleteHandler
    {
        public CountriesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}