using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.HumanResource.DesignationsRow;

namespace CloudGarage.HumanResource
{
    public interface IDesignationsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class DesignationsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDesignationsDeleteHandler
    {
        public DesignationsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}