using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CloudGarage.Financial.DebitvoucherRow;

namespace CloudGarage.Financial
{
    public interface IDebitvoucherDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class DebitvoucherDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDebitvoucherDeleteHandler
    {
        public DebitvoucherDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}