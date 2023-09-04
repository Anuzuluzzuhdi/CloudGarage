using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.HumanResource.DesignationsRow>;
using MyRow = CloudGarage.HumanResource.DesignationsRow;

namespace CloudGarage.HumanResource
{
    public interface IDesignationsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class DesignationsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDesignationsRetrieveHandler
    {
        public DesignationsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}