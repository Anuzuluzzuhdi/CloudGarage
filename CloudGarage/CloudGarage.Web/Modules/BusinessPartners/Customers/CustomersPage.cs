using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.BusinessPartners.Pages
{

    [PageAuthorize(typeof(CustomersRow))]
    public class CustomersController : Controller
    {
        [Route("BusinessPartners/Customers")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessPartners/Customers/CustomersIndex.cshtml");
        }
    }
}