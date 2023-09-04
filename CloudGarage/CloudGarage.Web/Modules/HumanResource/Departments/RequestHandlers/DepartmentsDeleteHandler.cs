using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.HumanResource.DepartmentsRow;

namespace CloudGarage.HumanResource
{
    public interface IDepartmentsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class DepartmentsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDepartmentsDeleteHandler
    {
        public DepartmentsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}