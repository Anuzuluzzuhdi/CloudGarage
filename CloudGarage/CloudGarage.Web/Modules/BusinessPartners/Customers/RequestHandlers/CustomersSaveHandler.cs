using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.BusinessPartners.CustomersRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.BusinessPartners.CustomersRow;

namespace CloudGarage.BusinessPartners
{
    public interface ICustomersSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CustomersSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICustomersSaveHandler
    {
        public CustomersSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}