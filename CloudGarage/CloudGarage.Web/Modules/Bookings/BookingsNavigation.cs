using Serenity.Navigation;
using MyPages = CloudGarage.Bookings.Pages;

[assembly: NavigationMenu(1006, "Bookings", icon: "fa-calendar")]
[assembly: NavigationLink(int.MaxValue, "Bookings/Vehicle Bookings", typeof(MyPages.VehiclebookingsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Bookings/Vehicle Courtesy Booking", typeof(MyPages.VehiclecourtesybookingController), icon: null)]