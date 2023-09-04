using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.CompaniesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.CompaniesRow;

namespace CloudGarage.Masters
{
    public interface ICompaniesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CompaniesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICompaniesSaveHandler
    {
        public CompaniesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}