using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Financial.DebitvoucherRow>;
using MyRow = CloudGarage.Financial.DebitvoucherRow;

namespace CloudGarage.Financial
{
    public interface IDebitvoucherListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class DebitvoucherListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDebitvoucherListHandler
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }
        public DebitvoucherListHandler(IRequestContext context)
             : base(context)
        {
        }
        protected override void OnBeforeExecuteQuery()
        {
            base.OnBeforeExecuteQuery();
            Query.Where(new Criteria(fld.IsAppove) == 1 &
               new Criteria(fld.IsPosted) == 1
               );
        }
        protected override void ApplySortBy(SqlQuery query, SortBy sortBy)
        {
            base.ApplySortBy(query, sortBy);
            sortBy.Field = fld.Id.PropertyName;
            sortBy.Descending = true;
        }
    }
}