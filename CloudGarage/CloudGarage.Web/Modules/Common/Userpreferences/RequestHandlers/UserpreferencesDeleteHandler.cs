using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Common.UserpreferencesRow;

namespace CloudGarage.Common
{
    public interface IUserpreferencesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class UserpreferencesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IUserpreferencesDeleteHandler
    {
        public UserpreferencesDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}