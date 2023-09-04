using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using CloudGarage.Financial;
using Serenity.Web;
using System;

namespace CloudGarage.Common
{
    public class AllBranchRowLookupScript<TRow> : RowLookupScript<TRow> where TRow : class, IRow, IAllBranchRow, new()
    {
        protected IUserAccessor UserAccessor { get; }
        protected IUserRetrieveService UserRetriever { get; }
        private ITwoLevelCache cache { get; }
        public AllBranchRowLookupScript(ISqlConnections connections, IUserAccessor userAccessor, IUserRetrieveService userRetriever, ITwoLevelCache Cache) : base(connections)
        {
            Expiration = TimeSpan.FromDays(-1);
            UserAccessor = userAccessor ?? throw new ArgumentNullException(nameof(userAccessor));
            UserRetriever = userRetriever ?? throw new ArgumentNullException(nameof(userRetriever));
            cache = Cache ?? throw new ArgumentNullException(nameof(Cache));

        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            AddTenantFilter(query);
        }

        protected void AddTenantFilter(SqlQuery query)
        {

            var username = UserAccessor.User?.Identity?.Name;

            if (UserRetriever.ByUsername(username) is UserDefinition user)
            {
                var r = new TRow();
                // query.Where(r.BranchIdField == user.BranchId);                
            }

        }

        public override string GetScript()
        {
            var username = UserAccessor.User?.Identity?.Name;
            UserDefinition user = (UserDefinition)UserRetriever.ByUsername(username);

            return cache.GetLocalStoreOnly("MultiBranchLookup:" +
                    this.ScriptName + ":" + user.Id, TimeSpan.FromHours(1),
               new TRow().GetFields().GenerationKey, () =>
               {
                   return base.GetScript();
               });
        }
    }
}
