using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Financial.JournalvoucherRow>;
using MyRow = CloudGarage.Financial.JournalvoucherRow;

namespace CloudGarage.Financial
{
    public interface IJournalvoucherListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class JournalvoucherListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IJournalvoucherListHandler
    {
        public JournalvoucherListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}