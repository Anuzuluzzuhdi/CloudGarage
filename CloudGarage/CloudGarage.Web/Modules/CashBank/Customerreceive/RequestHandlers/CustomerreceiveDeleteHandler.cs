using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.CashBank.CustomerreceiveRow;

namespace CloudGarage.CashBank
{
    public interface ICustomerreceiveDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class CustomerreceiveDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICustomerreceiveDeleteHandler
    {
        public CustomerreceiveDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}