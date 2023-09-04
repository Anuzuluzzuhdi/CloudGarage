using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Masters.BanksRow>;
using MyRow = CloudGarage.Masters.BanksRow;

namespace CloudGarage.Masters
{
    public interface IBanksRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class BanksRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBanksRetrieveHandler
    {
        public BanksRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}