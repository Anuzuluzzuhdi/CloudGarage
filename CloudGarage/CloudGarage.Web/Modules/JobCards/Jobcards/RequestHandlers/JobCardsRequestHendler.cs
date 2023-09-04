using Serenity.Extensions;
using Serenity.Services;
using System.Data;
using MyRow = CloudGarage.JobCards.JobcardsRow;

namespace CloudGarage.JobCards
{
    public interface IJobCardsGetNextNumberHandler : IRequestHandler
    {
        GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request);
    }

    public class JobCardsGetNextNumberHandler : IJobCardsGetNextNumberHandler
    {
        public GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request)
        {
            return GetNextNumberHelper.GetNextNumber(connection, request, MyRow.Fields.WorkOrderNo);
        }
    }
}
