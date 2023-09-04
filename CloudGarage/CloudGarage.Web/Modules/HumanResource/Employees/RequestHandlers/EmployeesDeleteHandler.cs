using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.HumanResource.EmployeesRow;

namespace CloudGarage.HumanResource
{
    public interface IEmployeesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeesDeleteHandler
    {
        public EmployeesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}