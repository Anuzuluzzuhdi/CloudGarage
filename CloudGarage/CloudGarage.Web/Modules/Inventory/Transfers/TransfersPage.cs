using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Inventory.Pages
{

    [PageAuthorize(typeof(TransfersRow))]
    public class TransfersController : Controller
    {
        [Route("Inventory/Transfers")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/Transfers/TransfersIndex.cshtml");
        }
    }
}