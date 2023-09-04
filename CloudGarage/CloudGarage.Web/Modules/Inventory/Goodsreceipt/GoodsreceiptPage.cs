using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Inventory.Pages
{

    [PageAuthorize(typeof(GoodsreceiptRow))]
    public class GoodsreceiptController : Controller
    {
        [Route("Inventory/GoodsReceipt")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/GoodsReceipt/GoodsreceiptIndex.cshtml");
        }
    }
}