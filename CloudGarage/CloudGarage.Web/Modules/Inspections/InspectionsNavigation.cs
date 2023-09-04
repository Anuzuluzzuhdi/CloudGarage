using Serenity.Navigation;
using MyPages = CloudGarage.Inspections.Pages;

[assembly: NavigationMenu(1007, "Inspections", icon: "fa-asl-interpreting")]
[assembly: NavigationLink(int.MaxValue, "Inspections/Inspections", typeof(MyPages.InspectionsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Inspections/Inspectionchecklist", typeof(MyPages.InspectionchecklistController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Inspections/Inspectionjobtypes", typeof(MyPages.InspectionjobtypesController), icon: null)]