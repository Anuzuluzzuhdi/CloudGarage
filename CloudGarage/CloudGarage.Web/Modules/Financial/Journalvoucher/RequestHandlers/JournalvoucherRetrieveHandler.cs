using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Financial.JournalvoucherRow>;
using MyRow = CloudGarage.Financial.JournalvoucherRow;

namespace CloudGarage.Financial
{
    public interface IJournalvoucherRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class JournalvoucherRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IJournalvoucherRetrieveHandler
    {
        public JournalvoucherRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}