using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Inventory.Pages
{

    [PageAuthorize(typeof(CategoriesRow))]
    public class CategoriesController : Controller
    {
        [Route("Inventory/Categories")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/Categories/CategoriesIndex.cshtml");
        }
    }
}