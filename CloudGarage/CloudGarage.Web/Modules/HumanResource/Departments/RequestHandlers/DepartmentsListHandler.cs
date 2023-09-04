using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.HumanResource.DepartmentsRow>;
using MyRow = CloudGarage.HumanResource.DepartmentsRow;

namespace CloudGarage.HumanResource
{
    public interface IDepartmentsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class DepartmentsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDepartmentsListHandler
    {
        public DepartmentsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}