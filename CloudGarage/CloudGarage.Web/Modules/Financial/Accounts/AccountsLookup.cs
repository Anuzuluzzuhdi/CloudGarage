using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CloudGarage.Financial
{
    [LookupScript]
    public class AccountsLookup : RowLookupScript<AccountsRow>
    {

        public AccountsLookup(ISqlConnections sqlConnections)
           : base(sqlConnections)
        {
            IdField = AccountsRow.Fields.Id.PropertyName;
            TextField = AccountsRow.Fields.HeadCode.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = AccountsRow.Fields;
            query.Distinct(true)
                .Select(fld.Id)
                .Select(fld.HeadName)
                .Select(fld.ParentHead)
                .Select(fld.PHeadName)
                .Select(fld.HeadCode)
                .Where(
                    //new Criteria(fld.HeadCode).StartsWith("1020203") &
                    //new Criteria(fld.HeadCode)!= 1020203 &
                    new Criteria(fld.Id) == 1);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
        protected override List<AccountsRow> GetItems()
        {

            List<AccountsRow> items = (List<AccountsRow>)base.GetItems();
            var resultRows = new List<AccountsRow>();
            foreach (var item in items)
            {
                resultRows.Add(item);
            }
            return resultRows;
        }

    }
}
