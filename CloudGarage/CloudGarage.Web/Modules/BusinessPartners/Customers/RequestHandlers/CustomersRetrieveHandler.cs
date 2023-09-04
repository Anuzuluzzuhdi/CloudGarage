using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.BusinessPartners.CustomersRow>;
using MyRow = CloudGarage.BusinessPartners.CustomersRow;

namespace CloudGarage.BusinessPartners
{
    public interface ICustomersRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CustomersRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICustomersRetrieveHandler
    {
        public CustomersRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}