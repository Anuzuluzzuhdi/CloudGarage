using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Meeting.Pages
{

    [PageAuthorize(typeof(MeetingsRow))]
    public class MeetingsController : Controller
    {
        [Route("Meeting/Meetings")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/Meetings/MeetingsIndex.cshtml");
        }
    }
}