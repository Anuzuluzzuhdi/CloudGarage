using Serenity.Navigation;
using MyPages = CloudGarage.Reports.Pages;

[assembly: NavigationMenu(1019, "Reports", icon: "fa fa-file-text-o")]
[assembly: NavigationLink(int.MaxValue, "Reports/Dailyclosing/", typeof(MyPages.CloseDayController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Reports/Stock Report", typeof(MyPages.StockReportController), icon: null)]

[assembly: NavigationLink(int.MaxValue, "Reports/Customer Receivable Report", typeof(MyPages.CustomerReceivableReportController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Reports/Supplier Payable Report", typeof(MyPages.SupplierPayableReportController), icon: null)]

[assembly: NavigationLink(int.MaxValue, "Reports/Today's Report", typeof(MyPages.TodaysReportController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Reports/Sale Report", typeof(MyPages.SaleReportController), icon: null)]

[assembly: NavigationLink(int.MaxValue, "Reports/Product Wise Sale Report", typeof(MyPages.ProductWiseSalesReportController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Reports/Purchase Report", typeof(MyPages.PurchaseReporController), icon: null)] 