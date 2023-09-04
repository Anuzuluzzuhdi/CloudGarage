using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Meeting.Pages
{

    [PageAuthorize(typeof(MeetingdecisionrelevantRow))]
    public class MeetingdecisionrelevantController : Controller
    {
        [Route("Meeting/Meetingdecisionrelevant")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/Meetingdecisionrelevant/MeetingdecisionrelevantIndex.cshtml");
        }
    }
}