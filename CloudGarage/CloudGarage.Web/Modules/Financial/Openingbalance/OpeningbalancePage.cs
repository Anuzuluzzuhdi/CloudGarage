using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Financial.Pages
{

    [PageAuthorize(typeof(OpeningbalanceRow))]
    public class OpeningbalanceController : Controller
    {
        [Route("Financial/Openingbalance")]
        public ActionResult Index()
        {
            return View("~/Modules/Financial/Openingbalance/OpeningbalanceIndex.cshtml");
        }
    }
}