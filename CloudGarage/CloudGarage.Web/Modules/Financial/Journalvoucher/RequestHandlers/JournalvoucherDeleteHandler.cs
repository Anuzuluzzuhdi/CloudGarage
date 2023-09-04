using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Financial.JournalvoucherRow;

namespace CloudGarage.Financial
{
    public interface IJournalvoucherDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class JournalvoucherDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IJournalvoucherDeleteHandler
    {
        public JournalvoucherDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}