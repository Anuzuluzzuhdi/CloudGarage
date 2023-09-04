
namespace CloudGarage.Reports.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using CloudGarage.Sales;
    using Serenity.Data;

    using System.Collections.Generic;

    using System;
    using Serenity.Abstractions;
    using CloudGarage.Masters;
    using CloudGarage.invoice;
    using CloudGarage.Purchasing;
    using CloudGarage.Financial;

    [PageAuthorize]
    [ReadPermission("Administration:General")]
    public class TodaysReportController : Controller
    {
        protected ISqlConnections SqlConnections { get; }
        private IUserRetrieveService UserRetriever { get; }
        public TodaysReportController(ISqlConnections sqlConnections, IUserRetrieveService userRetriever)
        {
            SqlConnections = sqlConnections;
            UserRetriever = userRetriever ?? throw new ArgumentNullException(nameof(userRetriever));
        }
        [Route("Reports/TodaysReport")]
        public ActionResult Index()
        {
            var data = GetData();
            return View("~/Modules/Reports/TodaysReport/TodaysReportIndex.cshtml", data);
        }
        public object GetData()
        {
            var data = new TodaysReportData();
            var userDef = (UserDefinition)User.GetUserDefinition(UserRetriever);
            Int64 _BranchId = userDef.BranchId;
            using (var connection = SqlConnections.NewFor<SalesRow>())
            {
                var o = SalesRow.Fields;

                data.SaleOrders = connection.List<SalesRow>(q => q
                     .SelectTableFields()
                     .Select(o.CustomerName).Where(o.Date==DateTime.Today && o.BranchesId == _BranchId)) ?? new List<SalesRow>();

                data.Invoices = connection.List<InvoicesRow>(q => q
                   .SelectTableFields()
                   .Select(o.CustomerName).Where(o.Date == DateTime.Today && o.BranchesId == _BranchId)) ?? new List<InvoicesRow>();

                var p = PurchaseRow.Fields;
                data.PurchaseOrders = connection.List<PurchaseRow>(q => q
                     .SelectTableFields()
                     .Select(p.SupplierCompanyName).Where(o.Date == DateTime.Today && o.BranchesId == _BranchId)) ?? new List<PurchaseRow>();


                var s = CompaniesRow.Fields;
                data.Company = connection.TryFirst<CompaniesRow>(s.Id > 0) ?? new CompaniesRow();

                var a = AccountsRow.Fields;               
                data.Accounts = connection.List<AccountsRow>(q => q
                    .SelectTableFields()
                    ) ?? new List<AccountsRow>();
            }

            return data;
        }
    }
    public class TodaysReportData
    {
        public List<InvoicesRow> Invoices { get; set; }
        public List<SalesRow> SaleOrders { get; set; }
        public List<PurchaseRow> PurchaseOrders { get; set; }       
        public List<AccountsRow> Accounts { get; set; }
        public CompaniesRow Company { get; set; }
    }
}