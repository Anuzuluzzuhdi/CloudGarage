using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(WarehousesRow))]
    public class WarehousesController : Controller
    {
        [Route("Masters/Warehouses")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Warehouses/WarehousesIndex.cshtml");
        }
    }
}