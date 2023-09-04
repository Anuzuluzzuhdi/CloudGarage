using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Meeting.Pages
{

    [PageAuthorize(typeof(MeetingagendatypeRow))]
    public class MeetingagendatypeController : Controller
    {
        [Route("Meeting/Meetingagendatype")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/Meetingagendatype/MeetingagendatypeIndex.cshtml");
        }
    }
}