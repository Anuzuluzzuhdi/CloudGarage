
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
    using CloudGarage.Financial;

    [PageAuthorize]
    [ReadPermission("Administration:General")]
    public class SaleReportController : Controller
    {
        protected ISqlConnections SqlConnections { get; }
        private IUserRetrieveService UserRetriever { get; }
        public SaleReportController(ISqlConnections sqlConnections, IUserRetrieveService userRetriever)
        {
            SqlConnections = sqlConnections;
            UserRetriever = userRetriever ?? throw new ArgumentNullException(nameof(userRetriever));
        }

        [Route("Reports/SaleReport")]
        public ActionResult Index()
        {
            var data = GetData();
            return View("~/Modules/Reports/SaleReport/SaleReportIndex.cshtml", data);
        }
        [HttpPost]
        [Route("Reports/SaleReport")]
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
            return View("~/Modules/Reports/SaleReport/SaleReportIndex.cshtml", data);
        }
        public object GetData(DateTime? startDate = null, DateTime? endDate = null)
        {
            var data = new SaleReportData();
            var userDef = (UserDefinition)User.GetUserDefinition(UserRetriever);
            Int64 _BranchId = userDef.BranchId;

            using (var connection = SqlConnections.NewFor<SalesRow>())
            {
                var o = SalesRow.Fields;

                
                if (startDate != null && endDate == null)
                {
                    data.Orders = connection.List<SalesRow>(q => q
                      .SelectTableFields()
                      .Select(o.CustomerName).Where(o.Date >= startDate.Value && o.BranchesId == _BranchId)) ?? new List<SalesRow>();
                  
                }
                else if (startDate != null && endDate != null)
                {
                    data.Orders = connection.List<SalesRow>(q => q
                    .SelectTableFields()
                    .Select(o.CustomerName).Where(o.Date >= startDate.Value && o.Date <= endDate.Value && o.BranchesId == _BranchId)) ?? new List<SalesRow>();
                    
                }
                else if (startDate == null && endDate != null)
                {
                    data.Orders = connection.List<SalesRow>(q => q
                    .SelectTableFields()
                    .Select(o.CustomerName).Where(o.Date <= endDate.Value && o.BranchesId == _BranchId)) ?? new List<SalesRow>();                   
                }
                else
                {
                    data.Orders = connection.List<SalesRow>(q => q
                      .SelectTableFields()
                      .Select(o.CustomerName)) ?? new List<SalesRow>();
                }

                var od = SaledetailsRow.Fields;
                data.OrderDetails = connection.List<SaledetailsRow>(q => q
                    .SelectTableFields()) ?? new List<SaledetailsRow>();
                              

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
    public class SaleReportData
    {
        public List<SalesRow> Orders { get; set; }
        public List<SaledetailsRow> OrderDetails { get; set; }
        public List<AccountsRow> Accounts { get; set; }
        public CompaniesRow Company { get; set; }
    }
}