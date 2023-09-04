using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.AssemblytypesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.AssemblytypesRow;

namespace CloudGarage.Masters
{
    public interface IAssemblytypesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AssemblytypesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAssemblytypesSaveHandler
    {
        public AssemblytypesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}