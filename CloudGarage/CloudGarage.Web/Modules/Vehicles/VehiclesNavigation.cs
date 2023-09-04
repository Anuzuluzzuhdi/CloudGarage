using Serenity.Navigation;
using MyPages = CloudGarage.Vehicles.Pages;

[assembly: NavigationMenu(1005, "Vehicles", icon: "fa-car")]
[assembly: NavigationLink(int.MaxValue, "Vehicles/Vehicle", typeof(MyPages.VehicleController), icon: "fa-car")]