using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Inventory.Pages
{

    [PageAuthorize(typeof(UpdatestocksRow))]
    public class UpdatestocksController : Controller
    {
        [Route("Inventory/UpdateStock")]
        public ActionResult Index()
        {
            return View(MVC.Views.Inventory.Updatestocks.UpdatestocksIndex);
        }
    }
}