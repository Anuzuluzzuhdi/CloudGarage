using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Financial.CreditvoucherRow;

namespace CloudGarage.Financial
{
    public interface ICreditvoucherDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class CreditvoucherDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICreditvoucherDeleteHandler
    {
        public CreditvoucherDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}