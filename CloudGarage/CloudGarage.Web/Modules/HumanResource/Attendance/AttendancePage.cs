using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.HumanResource.Pages
{

    [PageAuthorize(typeof(AttendanceRow))]
    public class AttendanceController : Controller
    {
        [Route("HumanResource/Attendance")]
        public ActionResult Index()
        {
            return View("~/Modules/HumanResource/Attendance/AttendanceIndex.cshtml");
        }
    }
}