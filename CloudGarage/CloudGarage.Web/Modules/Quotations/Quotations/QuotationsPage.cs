using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Quotations.Pages
{

    [PageAuthorize(typeof(QuotationsRow))]
    public class QuotationsController : Controller
    {
        [Route("Quotations/Quotations")]
        public ActionResult Index()
        {
            return View("~/Modules/Quotations/Quotations/QuotationsIndex.cshtml");
        }
    }
}