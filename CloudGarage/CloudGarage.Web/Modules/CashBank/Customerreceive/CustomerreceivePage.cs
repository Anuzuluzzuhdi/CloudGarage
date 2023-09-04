using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.CashBank.Pages
{

    [PageAuthorize(typeof(CustomerreceiveRow))]
    public class CustomerreceiveController : Controller
    {
        [Route("CashBank/CustomerReceive")]
        public ActionResult Index()
        {
            return View("~/Modules/CashBank/CustomerReceive/CustomerreceiveIndex.cshtml");
        }
    }
}