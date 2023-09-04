using Serenity.Navigation;
using MyPages = CloudGarage.Inventory.Pages;

[assembly: NavigationMenu(1009, "Inventory", icon: "fa-th")]
[assembly: NavigationLink(int.MaxValue, "Inventory/Products", typeof(MyPages.ProductsController), icon: "fa-th")]
[assembly: NavigationLink(int.MaxValue, "Inventory/Categories", typeof(MyPages.CategoriesController), icon: "fa-list" )]
[assembly: NavigationLink(int.MaxValue, "Inventory/Units", typeof(MyPages.UnitsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inventory/Brands", typeof(MyPages.BrandsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inventory/Damaged Products", typeof(MyPages.DamagedproductsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inventory/Goods Receipt", typeof(MyPages.GoodsreceiptController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inventory/Goods Issue", typeof(MyPages.GoodsissueController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inventory/Transfers", typeof(MyPages.TransfersController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inventory/Update Stock", typeof(MyPages.UpdatestocksController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Inventory/Goodsreceiptdetails", typeof(MyPages.GoodsreceiptdetailsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Inventory/Goodsissuedetails", typeof(MyPages.GoodsissuedetailsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Inventory/Stocks", typeof(MyPages.StocksController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Inventory/Transferdetails", typeof(MyPages.TransferdetailsController), icon: null)]