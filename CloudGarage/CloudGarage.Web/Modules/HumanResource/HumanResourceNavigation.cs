using Serenity.Navigation;
using MyPages = CloudGarage.HumanResource.Pages;

[assembly: NavigationMenu(1016, "Human Resource", icon: "fa fa-users")]
[assembly: NavigationLink(int.MaxValue, "Human Resource/Employees", typeof(MyPages.EmployeesController), icon: "fa fa-users")]
[assembly: NavigationLink(int.MaxValue, "Human Resource/Departments", typeof(MyPages.DepartmentsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Human Resource/Designations", typeof(MyPages.DesignationsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Human Resource/Attendance", typeof(MyPages.AttendanceController), icon: "fa fa-calendar")] 