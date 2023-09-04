using Serenity.Navigation;
using MyPages = CloudGarage.JobCards.Pages;

[assembly: NavigationMenu(1008, "Job Cards", icon: "fa fa-tasks")]
[assembly: NavigationLink(int.MaxValue, "Job Cards/Job Cards", typeof(MyPages.JobcardsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Job Cards/Gate Passes", typeof(MyPages.GatepassesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "JobCards/Jobcarddetails", typeof(MyPages.JobcarddetailsController), icon: null)]