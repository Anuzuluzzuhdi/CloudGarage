using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Masters.BanksRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Masters.BanksRow;

namespace CloudGarage.Masters
{
    public interface IBanksSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class BanksSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBanksSaveHandler
    {
        public BanksSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}