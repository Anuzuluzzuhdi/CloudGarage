using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Purchasing.Pages
{

    [PageAuthorize(typeof(PurchaseRow))]
    public class PurchaseController : Controller
    {
        [Route("Purchasing/Purchase")]
        public ActionResult Index()
        {
            return View("~/Modules/Purchasing/Purchase/PurchaseIndex.cshtml");
        }
    }
}