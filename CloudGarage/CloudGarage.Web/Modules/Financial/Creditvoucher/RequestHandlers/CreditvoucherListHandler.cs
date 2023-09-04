using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Financial.CreditvoucherRow>;
using MyRow = CloudGarage.Financial.CreditvoucherRow;

namespace CloudGarage.Financial
{
    public interface ICreditvoucherListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CreditvoucherListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICreditvoucherListHandler
    {
        public CreditvoucherListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}