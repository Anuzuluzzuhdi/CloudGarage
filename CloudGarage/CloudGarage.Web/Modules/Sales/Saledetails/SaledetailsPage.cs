using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Sales.Pages
{

    [PageAuthorize(typeof(SaledetailsRow))]
    public class SaledetailsController : Controller
    {
        [Route("Sales/Saledetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Sales/Saledetails/SaledetailsIndex.cshtml");
        }
    }
}