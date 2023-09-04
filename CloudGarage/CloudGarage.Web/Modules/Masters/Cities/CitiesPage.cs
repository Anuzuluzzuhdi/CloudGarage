using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(CitiesRow))]
    public class CitiesController : Controller
    {
        [Route("Masters/Cities")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Cities/CitiesIndex.cshtml");
        }
    }
}