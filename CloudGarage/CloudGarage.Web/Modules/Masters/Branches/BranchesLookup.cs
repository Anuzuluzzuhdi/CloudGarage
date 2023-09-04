namespace CloudGarage.Masters
{
    using Serenity.Abstractions;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using CloudGarage.Administration;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    [LookupScript]
    public class BranchesLookup : RowLookupScript<BranchesRow>
    {

        public BranchesLookup(ISqlConnections connections) : base(connections)
        {
            IdField = BranchesRow.Fields.Id.PropertyName;
            TextField = BranchesRow.Fields.Name.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = BranchesRow.Fields;
            query.Distinct(true)
                .Select(fld.Id)
                .Select(fld.Name)
                .Where(
                    //new Criteria(fld.HeadCode).StartsWith("1020203") &
                    //new Criteria(fld.HeadCode)!= 1020203 &
                    new Criteria(fld.IsActive) == 1);


        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }

    }
}
