using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Meeting.Pages
{

    [PageAuthorize(typeof(MeetingattendeeRow))]
    public class MeetingattendeeController : Controller
    {
        [Route("Meeting/Meetingattendee")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/Meetingattendee/MeetingattendeeIndex.cshtml");
        }
    }
}