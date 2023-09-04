using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.HumanResource.EmployeesRow>;
using MyRow = CloudGarage.HumanResource.EmployeesRow;

namespace CloudGarage.HumanResource
{
    public interface IEmployeesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeesRetrieveHandler
    {
        public EmployeesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}