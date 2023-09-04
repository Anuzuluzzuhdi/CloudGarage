using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Linq;
using System.Collections.Generic;

namespace CloudGarage.Common.Pages
{
    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index(
            [FromServices] ITwoLevelCache cache,
            [FromServices] ISqlConnections sqlConnections
            )
        {
            if (cache is null)
                throw new ArgumentNullException(nameof(cache));

            if (sqlConnections is null)
                throw new ArgumentNullException(nameof(sqlConnections));

            var o = Sales.SalesRow.Fields;
            var c = BusinessPartners.CustomersRow.Fields;
            var s = BusinessPartners.SuppliersRow.Fields;
            var v = Vehicles.VehicleRow.Fields;
            var p = Inventory.ProductsRow.Fields;
            //var a = Sales.SaledetailsRow.Fields;
            //var t = CloudGarage.TasksRow.Fields;
            var q = Purchasing.PurchaseRow.Fields;
            var e = CashBank.ExpensesRow.Fields;

            var cachedModel = cache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5),
                o.GenerationKey, () =>
                {
                    var model = new DashboardPageModel();
                    using (var connection = sqlConnections.NewFor<Sales.SalesRow>())
                    {                     
                        model.TodaySale = connection.List<Sales.SalesRow>().Where(a => a.Date.Value.Date == DateTime.Now.Date).Sum(x => x.GrandTotal).Value;                       
                        model.CustomerCount = connection.List<BusinessPartners.CustomersRow>().Count;                        
                        model.SupplierCount = connection.List<BusinessPartners.SuppliersRow>().Count;                       
                        model.VehicleCount = connection.List<Vehicles.VehicleRow>(v.Id > 0).Count;      
                        model.ProductCount = connection.List<Inventory.ProductsRow>().Count;

                        model.Tahun = DateTime.Now.Year;

                        model.Products = connection.List<Inventory.ProductsRow>().OrderByDescending(a => a.UpdateDate).Take(5).ToList();
                        model.Sales    = connection.List<Sales.SaledetailsRow>().Take(5).ToList();
                        // model.Sales    = connection.List<Sales.SaledetailsRow>().OrderByDescending(a=> a.SaleDate).Take(10).ToList();


                        var purchase = new List<int>();
                        var sale = new List<int>();
                        var expense = new List<int>();
                        for (int i = 1; i < 13; i++)
                        {
                            var firstDayOfMonth = new DateTime(DateTime.Now.Year, i, 1);
                            var lastDayOfMonth = firstDayOfMonth.AddMonths(1).AddDays(-1);
                            purchase.Add(connection.Count<Purchasing.PurchaseRow>(q.In >= firstDayOfMonth && q.In <= lastDayOfMonth));
                            sale.Add(connection.Count<Sales.SalesRow>( o.In >= firstDayOfMonth && o.In <= lastDayOfMonth));
                            expense.Add(connection.Count<CashBank.ExpensesRow>( e.In >= firstDayOfMonth && e.In <= lastDayOfMonth));
                        }
                        model.Purchase = purchase;
                        model.Sale = sale;
                        model.Expense = expense;
                    }
                    return model;
                });
            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
        }
    }
}
