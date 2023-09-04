using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Inventory.Pages
{

    [PageAuthorize(typeof(UnitsRow))]
    public class UnitsController : Controller
    {
        [Route("Inventory/Units")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/Units/UnitsIndex.cshtml");
        }
    }
}