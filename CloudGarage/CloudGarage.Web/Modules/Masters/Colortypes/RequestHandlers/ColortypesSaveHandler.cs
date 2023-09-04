using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.ColortypesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.ColortypesRow;

namespace CloudGarage.Masters
{
    public interface IColortypesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ColortypesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IColortypesSaveHandler
    {
        public ColortypesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}