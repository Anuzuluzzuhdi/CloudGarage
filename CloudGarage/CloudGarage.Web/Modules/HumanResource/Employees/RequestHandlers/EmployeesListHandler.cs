using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.HumanResource.EmployeesRow>;
using MyRow = CloudGarage.HumanResource.EmployeesRow;

namespace CloudGarage.HumanResource
{
    public interface IEmployeesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeesListHandler
    {
        public EmployeesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}