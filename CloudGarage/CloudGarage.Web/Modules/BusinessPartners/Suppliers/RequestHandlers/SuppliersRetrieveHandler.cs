using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.BusinessPartners.SuppliersRow>;
using MyRow = CloudGarage.BusinessPartners.SuppliersRow;

namespace CloudGarage.BusinessPartners
{
    public interface ISuppliersRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class SuppliersRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISuppliersRetrieveHandler
    {
        public SuppliersRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}