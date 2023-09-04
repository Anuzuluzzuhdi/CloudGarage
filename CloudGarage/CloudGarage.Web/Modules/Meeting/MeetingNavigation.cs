using Serenity.Navigation;
using MyPages = CloudGarage.Meeting.Pages;


[assembly: NavigationLink(int.MaxValue, "Meeting/Meetingagendarelevant", typeof(MyPages.MeetingagendarelevantController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Meeting/Meetingagenda", typeof(MyPages.MeetingagendaController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Meeting/Meetingagendatype", typeof(MyPages.MeetingagendatypeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Meeting/Meetingattendee", typeof(MyPages.MeetingattendeeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Meeting/Meetingdecisionrelevant", typeof(MyPages.MeetingdecisionrelevantController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Meeting/Meetingdecision", typeof(MyPages.MeetingdecisionController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Meeting/Meetinglocation", typeof(MyPages.MeetinglocationController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Meeting/Meeting", typeof(MyPages.MeetingController), icon: null)]