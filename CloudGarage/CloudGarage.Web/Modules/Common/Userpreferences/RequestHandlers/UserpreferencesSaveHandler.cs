using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Common.UserpreferencesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Common.UserpreferencesRow;

namespace CloudGarage.Common
{
    public interface IUserpreferencesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class UserpreferencesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IUserpreferencesSaveHandler
    {
        public UserpreferencesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}