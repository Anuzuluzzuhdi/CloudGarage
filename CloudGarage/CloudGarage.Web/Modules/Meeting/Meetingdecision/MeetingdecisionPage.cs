using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Meeting.Pages
{

    [PageAuthorize(typeof(MeetingdecisionRow))]
    public class MeetingdecisionController : Controller
    {
        [Route("Meeting/Meetingdecision")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/Meetingdecision/MeetingdecisionIndex.cshtml");
        }
    }
}