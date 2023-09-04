using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Masters.BanksRow;

namespace CloudGarage.Masters
{
    public interface IBanksDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class BanksDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBanksDeleteHandler
    {
        public BanksDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}