using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.CashBank.CustomerreceiveRow>;
using MyRow = CloudGarage.CashBank.CustomerreceiveRow;

namespace CloudGarage.CashBank
{
    public interface ICustomerreceiveListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CustomerreceiveListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICustomerreceiveListHandler
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }
        public CustomerreceiveListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}