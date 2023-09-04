using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(LocationsRow))]
    public class LocationsController : Controller
    {
        [Route("Masters/Locations")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Locations/LocationsIndex.cshtml");
        }
    }
}