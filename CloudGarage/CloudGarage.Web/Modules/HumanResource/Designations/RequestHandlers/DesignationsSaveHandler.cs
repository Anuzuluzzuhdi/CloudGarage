using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.HumanResource.DesignationsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.HumanResource.DesignationsRow;

namespace CloudGarage.HumanResource
{
    public interface IDesignationsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class DesignationsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDesignationsSaveHandler
    {
        public DesignationsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}