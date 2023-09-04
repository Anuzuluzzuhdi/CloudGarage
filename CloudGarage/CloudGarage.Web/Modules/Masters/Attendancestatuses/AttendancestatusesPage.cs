using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(AttendancestatusesRow))]
    public class AttendancestatusesController : Controller
    {
        [Route("Masters/Attendancestatuses")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Attendancestatuses/AttendancestatusesIndex.cshtml");
        }
    }
}