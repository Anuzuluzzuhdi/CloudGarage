using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.HumanResource.DesignationsRow>;
using MyRow = CloudGarage.HumanResource.DesignationsRow;

namespace CloudGarage.HumanResource
{
    public interface IDesignationsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class DesignationsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDesignationsListHandler
    {
        public DesignationsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}