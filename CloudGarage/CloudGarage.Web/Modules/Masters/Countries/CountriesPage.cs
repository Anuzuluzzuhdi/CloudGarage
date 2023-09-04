using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(CountriesRow))]
    public class CountriesController : Controller
    {
        [Route("Masters/Countries")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Countries/CountriesIndex.cshtml");
        }
    }
}