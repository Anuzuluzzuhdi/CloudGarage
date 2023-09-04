using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Inventory.Pages
{

    [PageAuthorize(typeof(StocksRow))]
    public class StocksController : Controller
    {
        [Route("Inventory/Stocks")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/Stocks/StocksIndex.cshtml");
        }
    }
}