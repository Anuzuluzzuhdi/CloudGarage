using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.CompaniesRow;

namespace CloudGarage.Masters
{
    public interface ICompaniesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class CompaniesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICompaniesDeleteHandler
    {
        public CompaniesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}