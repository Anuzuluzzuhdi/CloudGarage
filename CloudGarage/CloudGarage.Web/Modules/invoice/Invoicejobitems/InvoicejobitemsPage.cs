using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.invoice.Pages
{

    [PageAuthorize(typeof(InvoicejobitemsRow))]
    public class InvoicejobitemsController : Controller
    {
        [Route("invoice/Invoicejobitems")]
        public ActionResult Index()
        {
            return View("~/Modules/invoice/Invoicejobitems/InvoicejobitemsIndex.cshtml");
        }
    }
}