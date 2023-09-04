using Serenity.Navigation;
using MyPages = CloudGarage.BusinessPartners.Pages;

[assembly: NavigationMenu(1004, "Business Partners", icon: "fa fa-address-card-o")]
[assembly: NavigationLink(int.MaxValue, "Business Partners/New Customer", typeof(MyPages.CustomersController), icon: null, Url = "/BusinessPartners/Customers#new")]
[assembly: NavigationLink(int.MaxValue, "Business Partners/New Supplier", typeof(MyPages.SuppliersController), icon: null, Url = "/BusinessPartners/Suppliers#new")]
[assembly: NavigationLink(int.MaxValue, "Business Partners/Customers", typeof(MyPages.CustomersController), icon: "fa fa-address-card-o")]
[assembly: NavigationLink(int.MaxValue, "Business Partners/Suppliers", typeof(MyPages.SuppliersController), icon: "fa fa-truck")] 