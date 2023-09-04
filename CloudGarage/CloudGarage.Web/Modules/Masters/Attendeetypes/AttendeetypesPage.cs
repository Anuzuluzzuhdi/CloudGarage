using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(AttendeetypesRow))]
    public class AttendeetypesController : Controller
    {
        [Route("Masters/Attendeetypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Attendeetypes/AttendeetypesIndex.cshtml");
        }
    }
}