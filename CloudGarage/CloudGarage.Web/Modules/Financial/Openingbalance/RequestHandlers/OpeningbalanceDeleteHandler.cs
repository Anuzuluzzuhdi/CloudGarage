using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Financial.OpeningbalanceRow;

namespace CloudGarage.Financial
{
    public interface IOpeningbalanceDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class OpeningbalanceDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IOpeningbalanceDeleteHandler
    {
        public OpeningbalanceDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}