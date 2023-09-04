using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Meeting.Pages
{

    [PageAuthorize(typeof(MeetingagendarelevantRow))]
    public class MeetingagendarelevantController : Controller
    {
        [Route("Meeting/Meetingagendarelevant")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/Meetingagendarelevant/MeetingagendarelevantIndex.cshtml");
        }
    }
}