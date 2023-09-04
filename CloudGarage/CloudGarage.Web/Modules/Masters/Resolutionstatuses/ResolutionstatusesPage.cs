using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(ResolutionstatusesRow))]
    public class ResolutionstatusesController : Controller
    {
        [Route("Masters/Resolutionstatuses")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Resolutionstatuses/ResolutionstatusesIndex.cshtml");
        }
    }
}