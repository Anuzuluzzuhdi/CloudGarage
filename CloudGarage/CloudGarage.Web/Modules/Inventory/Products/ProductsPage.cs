using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Inventory.Pages
{

    [PageAuthorize(typeof(ProductsRow))]
    public class ProductsController : Controller
    {
        [Route("Inventory/Products")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/Products/ProductsIndex.cshtml");
        }
    }
}