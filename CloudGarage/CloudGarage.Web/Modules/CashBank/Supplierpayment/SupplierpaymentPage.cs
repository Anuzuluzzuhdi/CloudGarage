using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.CashBank.Pages
{

    [PageAuthorize(typeof(SupplierpaymentRow))]
    public class SupplierpaymentController : Controller
    {
        [Route("CashBank/SupplierPayment")]
        public ActionResult Index()
        {
            return View("~/Modules/CashBank/SupplierPayment/SupplierpaymentIndex.cshtml");
        }
    }
}