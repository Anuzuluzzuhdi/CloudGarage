using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Quotations.Pages
{

    [PageAuthorize(typeof(QuotationjobitemsRow))]
    public class QuotationjobitemsController : Controller
    {
        [Route("Quotations/Quotationjobitems")]
        public ActionResult Index()
        {
            return View("~/Modules/Quotations/Quotationjobitems/QuotationjobitemsIndex.cshtml");
        }
    }
}