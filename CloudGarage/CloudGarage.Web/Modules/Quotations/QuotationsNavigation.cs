using Serenity.Navigation;
using MyPages = CloudGarage.Quotations.Pages;

[assembly: NavigationMenu(1010, "Quotations", icon: "fa fa-check-square")]
[assembly: NavigationLink(int.MaxValue, "Quotations/New Quotations", typeof(MyPages.QuotationsController), icon: null, Url = "/Quotations/Quotations#new")]
[assembly: NavigationLink(int.MaxValue, "Quotations/Quotations", typeof(MyPages.QuotationsController), icon: "fa fa-check-square")]
//[assembly: NavigationLink(int.MaxValue, "Quotations/Quotationdetails", typeof(MyPages.QuotationdetailsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Quotations/Quotationjobitems", typeof(MyPages.QuotationjobitemsController), icon: null)]