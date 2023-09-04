using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Inventory.Pages
{

    [PageAuthorize(typeof(TransferdetailsRow))]
    public class TransferdetailsController : Controller
    {
        [Route("Inventory/Transferdetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/Transferdetails/TransferdetailsIndex.cshtml");
        }
    }
}