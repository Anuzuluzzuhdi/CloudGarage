using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.BusinessPartners.Pages
{

    [PageAuthorize(typeof(SuppliersRow))]
    public class SuppliersController : Controller
    {
        [Route("BusinessPartners/Suppliers")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessPartners/Suppliers/SuppliersIndex.cshtml");
        }
    }
}