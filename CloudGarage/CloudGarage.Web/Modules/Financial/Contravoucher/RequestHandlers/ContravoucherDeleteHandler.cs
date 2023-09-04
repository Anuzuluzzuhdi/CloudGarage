using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Financial.ContravoucherRow;

namespace CloudGarage.Financial
{
    public interface IContravoucherDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ContravoucherDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IContravoucherDeleteHandler
    {
        public ContravoucherDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}