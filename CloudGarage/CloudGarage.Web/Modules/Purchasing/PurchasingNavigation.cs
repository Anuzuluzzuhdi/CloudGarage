using Serenity.Navigation;
using MyPages = CloudGarage.Purchasing.Pages;

[assembly: NavigationMenu(1011, "Purchasing", icon: "fa fa-file")]
[assembly: NavigationLink(int.MaxValue, "Purchasing/New Purchase", typeof(MyPages.PurchaseController), icon: null, Url = "/Purchasing/Purchase#new")]
[assembly: NavigationLink(int.MaxValue, "Purchasing/Purchase", typeof(MyPages.PurchaseController), icon: "fa fa-file")]
//[assembly: NavigationLink(int.MaxValue, "Purchasing/Purchasedetails", typeof(MyPages.PurchasedetailsController), icon: null)]