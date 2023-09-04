using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(CurrenciesRow))]
    public class CurrenciesController : Controller
    {
        [Route("Masters/Currencies")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Currencies/CurrenciesIndex.cshtml");
        }
    }
}