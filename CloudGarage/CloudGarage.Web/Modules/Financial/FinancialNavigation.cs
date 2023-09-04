using Serenity.Navigation;
using MyPages = CloudGarage.Financial.Pages;

[assembly: NavigationMenu(1015, "Financial", icon: "fa-briefcase")]
[assembly: NavigationLink(int.MaxValue, "Financial/Chart Of Accounts", typeof(MyPages.AccountsController), icon: "fa-briefcase")]
[assembly: NavigationLink(int.MaxValue, "Financial/Openingbalance", typeof(MyPages.OpeningbalanceController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Financial/Debitvoucher", typeof(MyPages.DebitvoucherController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Financial/Creditvoucher", typeof(MyPages.CreditvoucherController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Financial/Contravoucher", typeof(MyPages.ContravoucherController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Financial/Journalvoucher", typeof(MyPages.JournalvoucherController), icon: null)]