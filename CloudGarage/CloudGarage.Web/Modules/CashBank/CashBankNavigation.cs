using Serenity.Navigation;
using MyPages = CloudGarage.CashBank.Pages;

[assembly: NavigationMenu(1014, "Cash Bank", icon: "fa fa-university")]
[assembly: NavigationLink(int.MaxValue, "Cash Bank/Bank Transactions", typeof(MyPages.BanktransactionsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Cash Bank/Expenses", typeof(MyPages.ExpensesController), icon: "fa fa-money")]
[assembly: NavigationLink(int.MaxValue, "Cash Bank/Customer Receive", typeof(MyPages.CustomerreceiveController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Cash Bank/Supplier Payment", typeof(MyPages.SupplierpaymentController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Cash Bank/Cash Adjustment", typeof(MyPages.CashadjustmentController), icon: null)]