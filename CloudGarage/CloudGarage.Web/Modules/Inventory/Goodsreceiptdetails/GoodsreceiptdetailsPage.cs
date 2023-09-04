using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Inventory.Pages
{

    [PageAuthorize(typeof(GoodsreceiptdetailsRow))]
    public class GoodsreceiptdetailsController : Controller
    {
        [Route("Inventory/Goodsreceiptdetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/Goodsreceiptdetails/GoodsreceiptdetailsIndex.cshtml");
        }
    }
}