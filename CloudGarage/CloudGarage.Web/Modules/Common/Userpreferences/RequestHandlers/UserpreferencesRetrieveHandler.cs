using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Common.UserpreferencesRow>;
using MyRow = CloudGarage.Common.UserpreferencesRow;

namespace CloudGarage.Common
{
    public interface IUserpreferencesRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class UserpreferencesRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IUserpreferencesRetrieveHandler
    {
        public UserpreferencesRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}