using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.SuppliergroupsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.SuppliergroupsRow;

namespace CloudGarage.Masters
{
    public interface ISuppliergroupsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class SuppliergroupsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISuppliergroupsSaveHandler
    {
        public SuppliergroupsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}