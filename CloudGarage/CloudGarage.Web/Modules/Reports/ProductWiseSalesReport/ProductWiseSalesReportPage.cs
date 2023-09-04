
namespace CloudGarage.Reports.Pages
{
    using System;
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using CloudGarage.Sales;
    using Serenity.Data;
    using System.Collections.Generic;
    using Serenity.Abstractions;
    using CloudGarage.Masters;

    [PageAuthorize]
    [ReadPermission("Administration:General")]
    public class ProductWiseSalesReportController : Controller
    {
        protected ISqlConnections SqlConnections { get; }
        private IUserRetrieveService UserRetriever { get; }
        public ProductWiseSalesReportController(ISqlConnections sqlConnections, IUserRetrieveService userRetriever)
        {
            SqlConnections = sqlConnections;
            UserRetriever = userRetriever ?? throw new ArgumentNullException(nameof(userRetriever));
        }

        [Route("Reports/ProductWiseSalesReport")]
        public ActionResult Index()
        {
            var data = GetData();
            return View("~/Modules/Reports/ProductWiseSalesReport/ProductWiseSalesReportIndex.cshtml", data);
        }
        [HttpPost]
        [Route("Reports/ProductWiseSalesReport")]
        public ActionResult Search(string StartDate, string EndDate)
        {
            DateTime? startDate=null;
            DateTime? endDate=null;
            if (!string.IsNullOrWhiteSpace(StartDate))
            {
                startDate = Convert.ToDateTime(StartDate);
            }
            if (!string.IsNullOrWhiteSpace(EndDate))
            {
                endDate = Convert.ToDateTime(EndDate);
            }
            var data = GetData(startDate, endDate);
            return View("~/Modules/Reports/ProductWiseSalesReport/ProductWiseSalesReportIndex.cshtml", data);
        }

        public object GetData(DateTime? startDate=null, DateTime? endDate=null)
        {
            var data = new ProductWiseSalesReportData();

            var userDef = (UserDefinition)User.GetUserDefinition(UserRetriever);
            Int64 _BranchId = userDef.BranchId;

            using (var connection = SqlConnections.NewFor<SalesRow>())
            {
                var o = SalesRow.Fields;

                data.Orders = connection.List<SalesRow>(q => q
                     .SelectTableFields()
                     .Select(o.CustomerName).Where(o.BranchesId == _BranchId)) ?? new List<SalesRow>();


                var od = SaledetailsRow.Fields;
                
                if (startDate != null && endDate == null)
                {
                    data.OrderDetails = connection.List<SaledetailsRow>(q => q
                   .SelectTableFields().Where(od.SaleDate >= startDate.Value)) ?? new List<SaledetailsRow>();
                }
                else if (startDate != null && endDate != null)
                {
                    data.OrderDetails = connection.List<SaledetailsRow>(q => q
                   .SelectTableFields().Where(od.SaleDate >= startDate.Value && od.SaleDate <= endDate.Value)) ?? new List<SaledetailsRow>();
                }
                else if (startDate == null && endDate != null)
                {
                    data.OrderDetails = connection.List<SaledetailsRow>(q => q
                   .SelectTableFields().Where(od.SaleDate <= endDate.Value)) ?? new List<SaledetailsRow>();
                }
                else
                {
                    data.OrderDetails = connection.List<SaledetailsRow>(q => q
                   .SelectTableFields()) ?? new List<SaledetailsRow>();
                }



                var s = CompaniesRow.Fields;
                data.Company = connection.TryFirst<CompaniesRow>(s.Id > 0) ?? new CompaniesRow();
            }

            return data;
        }
    }
    public class ProductWiseSalesReportData
    {
        public List<SalesRow> Orders { get; set; }
        public List<SaledetailsRow> OrderDetails { get; set; }

        public CompaniesRow Company { get; set; }
    }
}