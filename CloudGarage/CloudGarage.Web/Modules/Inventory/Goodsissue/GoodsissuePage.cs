using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Inventory.Pages
{

    [PageAuthorize(typeof(GoodsissueRow))]
    public class GoodsissueController : Controller
    {
        [Route("Inventory/GoodsIssue")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/GoodsIssue/GoodsissueIndex.cshtml");
        }
    }
}