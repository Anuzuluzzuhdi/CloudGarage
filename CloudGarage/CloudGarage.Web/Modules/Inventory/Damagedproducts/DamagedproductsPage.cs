using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Inventory.Pages
{

    [PageAuthorize(typeof(DamagedproductsRow))]
    public class DamagedproductsController : Controller
    {
        [Route("Inventory/DamagedProducts")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/DamagedProducts/DamagedproductsIndex.cshtml");
        }
    }
}