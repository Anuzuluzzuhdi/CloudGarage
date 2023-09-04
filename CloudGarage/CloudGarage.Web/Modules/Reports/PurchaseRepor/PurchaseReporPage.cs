
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
    using CloudGarage.Purchasing;
    using CloudGarage.Masters;
    using CloudGarage.Financial;

    [PageAuthorize]
    [ReadPermission("Administration:General")]
    public class PurchaseReporController : Controller
    {
        protected ISqlConnections SqlConnections { get; }
        private IUserRetrieveService UserRetriever { get; }
        public PurchaseReporController(ISqlConnections sqlConnections, IUserRetrieveService userRetriever)
        {
            SqlConnections = sqlConnections;
            UserRetriever = userRetriever ?? throw new ArgumentNullException(nameof(userRetriever));
        }
        [Route("Reports/PurchaseRepor")]
        public ActionResult Index()
        {
            var data = GetData();
            return View("~/Modules/Reports/PurchaseRepor/PurchaseReporIndex.cshtml", data);
        }
        [HttpPost]
        [Route("Reports/PurchaseRepor")]
        public ActionResult Search(string StartDate, string EndDate)
        {
            DateTime? startDate = null;
            DateTime? endDate = null;
            if (!string.IsNullOrWhiteSpace(StartDate))
            {
                startDate = Convert.ToDateTime(StartDate);
            }
            if (!string.IsNullOrWhiteSpace(EndDate))
            {
                endDate = Convert.ToDateTime(EndDate);
            }
            var data = GetData(startDate, endDate);
            return View("~/Modules/Reports/PurchaseRepor/PurchaseReporIndex.cshtml", data);
        }
        public object GetData(DateTime? startDate = null, DateTime? endDate = null)
        {
            var data = new PurchaseReporData();
            var userDef = (UserDefinition)User.GetUserDefinition(UserRetriever);
            Int64 _BranchId = userDef.BranchId;

            using (var connection = SqlConnections.NewFor<SalesRow>())
            {
                var o = PurchaseRow.Fields;

                
                if (startDate != null && endDate == null)
                {
                    data.Orders = connection.List<PurchaseRow>(q => q
                      .SelectTableFields()
                      .Select(o.SupplierCompanyName).Where(o.Date >= startDate.Value && o.BranchesId == _BranchId)) ?? new List<PurchaseRow>();
                  
                }
                else if (startDate != null && endDate != null)
                {
                    data.Orders = connection.List<PurchaseRow>(q => q
                    .SelectTableFields()
                    .Select(o.SupplierCompanyName).Where(o.Date >= startDate.Value && o.Date <= endDate.Value && o.BranchesId == _BranchId)) ?? new List<PurchaseRow>();
                    
                }
                else if (startDate == null && endDate != null)
                {
                    data.Orders = connection.List<PurchaseRow>(q => q
                    .SelectTableFields()
                    .Select(o.SupplierCompanyName).Where(o.Date <= endDate.Value && o.BranchesId == _BranchId)) ?? new List<PurchaseRow>();                   
                }
                else
                {
                    data.Orders = connection.List<PurchaseRow>(q => q
                      .SelectTableFields()
                      .Select(o.SupplierCompanyName).Where( o.BranchesId == _BranchId)) ?? new List<PurchaseRow>();
                }

                var od = SaledetailsRow.Fields;
                data.OrderDetails = connection.List<PurchasedetailsRow>(q => q
                    .SelectTableFields()) ?? new List<PurchasedetailsRow>();
                              

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
    public class PurchaseReporData
    {
        public List<PurchaseRow> Orders { get; set; }
        public List<PurchasedetailsRow> OrderDetails { get; set; }
        public List<AccountsRow> Accounts { get; set; }
        public CompaniesRow Company { get; set; }
    }
}