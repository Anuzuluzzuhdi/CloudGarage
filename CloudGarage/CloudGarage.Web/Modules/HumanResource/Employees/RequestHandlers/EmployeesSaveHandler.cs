using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.HumanResource.EmployeesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.HumanResource.EmployeesRow;

namespace CloudGarage.HumanResource
{
    public interface IEmployeesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeesSaveHandler
    {
        public EmployeesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}