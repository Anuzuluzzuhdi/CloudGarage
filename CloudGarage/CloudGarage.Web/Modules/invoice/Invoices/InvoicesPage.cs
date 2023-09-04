using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.invoice.Pages
{

    [PageAuthorize(typeof(InvoicesRow))]
    public class InvoicesController : Controller
    {
        [Route("Invoice/Invoices")]
        public ActionResult Index()
        {
            return View("~/Modules/Invoice/Invoices/InvoicesIndex.cshtml");
        }
    }
}