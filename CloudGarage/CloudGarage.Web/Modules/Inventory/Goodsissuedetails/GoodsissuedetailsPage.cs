using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Inventory.Pages
{

    [PageAuthorize(typeof(GoodsissuedetailsRow))]
    public class GoodsissuedetailsController : Controller
    {
        [Route("Inventory/Goodsissuedetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/Goodsissuedetails/GoodsissuedetailsIndex.cshtml");
        }
    }
}