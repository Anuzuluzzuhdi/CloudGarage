using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.HumanResource.DepartmentsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.HumanResource.DepartmentsRow;

namespace CloudGarage.HumanResource
{
    public interface IDepartmentsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class DepartmentsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDepartmentsSaveHandler
    {
        public DepartmentsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}