using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(MeetingtypesRow))]
    public class MeetingtypesController : Controller
    {
        [Route("Masters/Meetingtypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Meetingtypes/MeetingtypesIndex.cshtml");
        }
    }
}