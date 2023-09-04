using Serenity.Navigation;
using MyPages = CloudGarage.invoice.Pages;

[assembly: NavigationMenu(1010, "Invoice", icon: "fa fa-cogs")]
[assembly: NavigationLink(int.MaxValue, "Invoice/New Invoice", typeof(MyPages.InvoicesController), icon: null, Url = "/Invoice/Invoices#new")]
[assembly: NavigationLink(int.MaxValue, "Invoice/Invoices", typeof(MyPages.InvoicesController), icon: "fa fa-cogs")]
//[assembly: NavigationLink(int.MaxValue, "invoice/Invoiceitems", typeof(MyPages.InvoiceitemsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "invoice/Invoicejobitems", typeof(MyPages.InvoicejobitemsController), icon: null)]