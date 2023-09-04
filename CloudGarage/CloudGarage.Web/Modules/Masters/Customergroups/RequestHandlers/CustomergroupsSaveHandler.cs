using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.CustomergroupsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.CustomergroupsRow;

namespace CloudGarage.Masters
{
    public interface ICustomergroupsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CustomergroupsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICustomergroupsSaveHandler
    {
        public CustomergroupsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}