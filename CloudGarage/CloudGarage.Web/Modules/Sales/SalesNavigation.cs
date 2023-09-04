using Serenity.Navigation;
using MyPages = CloudGarage.Sales.Pages;

[assembly: NavigationMenu(1012, "Sales", icon: "fa-shopping-cart")]
[assembly: NavigationLink(int.MaxValue, "Sales/New Sales", typeof(MyPages.SalesController), icon: null, Url = "/Sales/Sales#new")]
[assembly: NavigationLink(int.MaxValue, "Sales/Sales", typeof(MyPages.SalesController), icon: "fa-shopping-cart")]
//[assembly: NavigationLink(1003, "Sales/Saledetails", typeof(MyPages.SaledetailsController), icon: null)]