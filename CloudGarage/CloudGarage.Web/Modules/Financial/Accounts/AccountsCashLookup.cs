
using Serenity.Abstractions;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using CloudGarage.Common;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CloudGarage.Financial
{
    [LookupScript]
    public class AccountsCashLookup : AllBranchRowLookupScript<AccountsRow>
    {
        public AccountsCashLookup(ISqlConnections connections, IUserAccessor userAccessor, IUserRetrieveService userRetriever, ITwoLevelCache cache) : base(connections, userAccessor, userRetriever, cache)
        {
            IdField = "Id";
            TextField = "HeadName";
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = AccountsRow.Fields;
            query.Distinct(true)
                .Select(fld.Id)
                .Select(fld.HeadName)
                .Select(fld.ParentHead)
                .Select(fld.PHeadName)
                .Where(
                    //new Criteria(fld.HeadCode).StartsWith("1020203") &
                    //new Criteria(fld.HeadCode)!= 1020203 &
                    fld.IsActive == 1);

            AddTenantFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
        //protected override List<AccountsRow> GetItems()
        //{

        //    List<AccountsRow> items = (List<AccountsRow>)base.GetItems();
        //    var resultRows = new List<AccountsRow>();
        //    foreach (var item in items)
        //    {
        //        if (item.PHeadName.ToLower() == "Cash & Cash Equivalent".ToLower())
        //        //if (item.HeadName.ToLower() == "Cash In Hand".ToLower() || item.PHeadName.ToLower() == "Cash At Bank".ToLower())
        //        {
        //            resultRows.Add(item);
        //        }
        //    }
        //    return resultRows;
        //}
    }
}
