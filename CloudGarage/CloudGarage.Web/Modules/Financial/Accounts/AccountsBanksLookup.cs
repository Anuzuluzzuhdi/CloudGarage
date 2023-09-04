﻿using Serenity.Abstractions;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using CloudGarage.Common;
using System.Collections.Generic;
using System.Linq;

namespace CloudGarage.Financial
{
    [LookupScript]
    public class AccountsBanksLookup : AllBranchRowLookupScript<AccountsRow>
    {

        public AccountsBanksLookup(ISqlConnections connections, IUserAccessor userAccessor, IUserRetrieveService userRetriever, ITwoLevelCache cache) : base(connections, userAccessor, userRetriever, cache)
        {
            IdField = AccountsRow.Fields.Id.PropertyName;
            TextField = AccountsRow.Fields.HeadName.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = AccountsRow.Fields;
            query.Distinct(true)
                .Select(fld.Id)
                .Select(fld.HeadName)
                .Select(fld.ParentHead)
                .Where(
                    new Criteria(fld.HeadCode) &
                    new Criteria(fld.HeadCode) &
                    new Criteria(fld.IsActive) == 1);

            AddTenantFilter(query);
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
                var result = item.HeadName;

                var id = item.Id.Value;
                var visited = new HashSet<Int32>();
                while (item.ParentHead != null && !visited.Contains(item.Id.Value))
                {
                    var _item = items.Where(x => x.Id.Value == item.ParentHead.Value).FirstOrDefault();
                    visited.Add(item.Id.Value);
                    if (_item == null)
                        break;
                    if (!visited.Contains(_item.Id.Value))
                    {
                        visited.Add(_item.Id.Value);
                    }

                    result = _item.HeadName + " >> " + result;
                    //id = _item.Id.Value;
                }


                var resultItem = items.Where(x => x.Id.Value == id).FirstOrDefault();
                if (resultItem != null && items.Where(x => x.ParentHead.Value == resultItem.Id.Value).ToList().Count == 1)
                {

                    if (resultRows.Where(x => x.Id == resultItem.Id.Value).FirstOrDefault() == null)
                    {
                        resultItem.HeadName = result;
                        resultRows.Add(resultItem);
                    }
                }


            }




            return resultRows;
        }

        //private string GetText(List<AccountsRow> items, AccountsRow item)
        //{
        //    var result = item.HeadName;
        //    var visited = new HashSet<Int32>();
        //    while (item.ParentHead != null && !visited.Contains(item.Id.Value))
        //    {
        //        var _item = items.Where(x => x.ParentHead.Value == item.Id.Value).FirstOrDefault();
        //        if (_item == null)
        //        {
        //            visited.Add(item.Id.Value);
        //            break;
        //        }
        //        if (!visited.Contains(item.Id.Value))
        //        {
        //            visited.Add(item.Id.Value);
        //        }
        //        if (!visited.Contains(_item.Id.Value))
        //        {
        //            visited.Add(_item.Id.Value);
        //        }

        //        result = result + " >> " + _item.HeadName;
        //    }

        //    return result;
        //}
    }
}
