using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Financial.OpeningbalanceRow>;
using MyRow = CloudGarage.Financial.OpeningbalanceRow;

namespace CloudGarage.Financial
{
    public interface IOpeningbalanceListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class OpeningbalanceListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IOpeningbalanceListHandler
    {
        public OpeningbalanceListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}