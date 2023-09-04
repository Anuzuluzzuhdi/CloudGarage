using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.HumanResource.DepartmentsRow>;
using MyRow = CloudGarage.HumanResource.DepartmentsRow;

namespace CloudGarage.HumanResource
{
    public interface IDepartmentsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class DepartmentsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDepartmentsRetrieveHandler
    {
        public DepartmentsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}