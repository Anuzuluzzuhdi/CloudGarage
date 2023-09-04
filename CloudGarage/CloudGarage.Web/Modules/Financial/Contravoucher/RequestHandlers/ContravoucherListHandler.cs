using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Financial.ContravoucherRow>;
using MyRow = CloudGarage.Financial.ContravoucherRow;

namespace CloudGarage.Financial
{
    public interface IContravoucherListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ContravoucherListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IContravoucherListHandler
    {
        public ContravoucherListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}