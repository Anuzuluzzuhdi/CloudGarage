using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Meeting.Pages
{

    [PageAuthorize(typeof(MeetingagendaRow))]
    public class MeetingagendaController : Controller
    {
        [Route("Meeting/Meetingagenda")]
        public ActionResult Index()
        {
            return View("~/Modules/Meeting/Meetingagenda/MeetingagendaIndex.cshtml");
        }
    }
}