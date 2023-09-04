using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Meeting.Pages
{

    [PageAuthorize(typeof(MeetinglocationRow))]
    public class MeetinglocationController : Controller
    {
        [Route("Meeting/Meetinglocation")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/Meetinglocation/MeetinglocationIndex.cshtml");
        }
    }
}