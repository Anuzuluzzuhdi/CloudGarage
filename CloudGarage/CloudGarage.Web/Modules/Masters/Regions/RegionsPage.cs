using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(RegionsRow))]
    public class RegionsController : Controller
    {
        [Route("Masters/Regions")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Regions/RegionsIndex.cshtml");
        }
    }
}