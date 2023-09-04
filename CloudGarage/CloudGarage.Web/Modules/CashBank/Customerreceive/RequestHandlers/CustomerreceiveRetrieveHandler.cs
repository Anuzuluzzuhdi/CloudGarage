using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.CashBank.CustomerreceiveRow>;
using MyRow = CloudGarage.CashBank.CustomerreceiveRow;

namespace CloudGarage.CashBank
{
    public interface ICustomerreceiveRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CustomerreceiveRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICustomerreceiveRetrieveHandler
    {
        public CustomerreceiveRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}