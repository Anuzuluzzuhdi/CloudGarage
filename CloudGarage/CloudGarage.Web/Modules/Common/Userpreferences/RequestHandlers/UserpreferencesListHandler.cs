using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Common.UserpreferencesRow>;
using MyRow = CloudGarage.Common.UserpreferencesRow;

namespace CloudGarage.Common
{
    public interface IUserpreferencesListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class UserpreferencesListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserpreferencesListHandler
    {
        public UserpreferencesListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}