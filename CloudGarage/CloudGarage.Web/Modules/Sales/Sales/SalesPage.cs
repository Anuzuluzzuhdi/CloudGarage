using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Sales.Pages
{

    [PageAuthorize(typeof(SalesRow))]
    public class SalesController : Controller
    {
        [Route("Sales/Sales")]
        public ActionResult Index()
        {
            return View("~/Modules/Sales/Sales/SalesIndex.cshtml");
        }
    }
}