using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.invoice.Pages
{

    [PageAuthorize(typeof(InvoiceitemsRow))]
    public class InvoiceitemsController : Controller
    {
        [Route("invoice/Invoiceitems")]
        public ActionResult Index()
        {
            return View("~/Modules/invoice/Invoiceitems/InvoiceitemsIndex.cshtml");
        }
    }
}