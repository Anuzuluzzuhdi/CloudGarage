using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Quotations.Pages
{

    [PageAuthorize(typeof(QuotationdetailsRow))]
    public class QuotationdetailsController : Controller
    {
        [Route("Quotations/Quotationdetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Quotations/Quotationdetails/QuotationdetailsIndex.cshtml");
        }
    }
}