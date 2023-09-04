using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Masters.BanksRow>;
using MyRow = CloudGarage.Masters.BanksRow;

namespace CloudGarage.Masters
{
    public interface IBanksListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class BanksListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBanksListHandler
    {
        public BanksListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}