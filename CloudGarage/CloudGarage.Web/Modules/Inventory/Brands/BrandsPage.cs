using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Inventory.Pages
{

    [PageAuthorize(typeof(BrandsRow))]
    public class BrandsController : Controller
    {
        [Route("Inventory/Brands")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/Brands/BrandsIndex.cshtml");
        }
    }
}