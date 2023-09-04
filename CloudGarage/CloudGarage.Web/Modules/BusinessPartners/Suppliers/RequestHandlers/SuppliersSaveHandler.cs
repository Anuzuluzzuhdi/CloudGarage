using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.BusinessPartners.SuppliersRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.BusinessPartners.SuppliersRow;

namespace CloudGarage.BusinessPartners
{
    public interface ISuppliersSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class SuppliersSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISuppliersSaveHandler
    {
        public SuppliersSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}