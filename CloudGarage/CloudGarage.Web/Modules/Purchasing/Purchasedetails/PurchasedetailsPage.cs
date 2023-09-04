using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Purchasing.Pages
{

    [PageAuthorize(typeof(PurchasedetailsRow))]
    public class PurchasedetailsController : Controller
    {
        [Route("Purchasing/Purchasedetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Purchasing/Purchasedetails/PurchasedetailsIndex.cshtml");
        }
    }
}