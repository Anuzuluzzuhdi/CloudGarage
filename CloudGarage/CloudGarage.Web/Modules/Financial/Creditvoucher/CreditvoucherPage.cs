using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Financial.Pages
{

    [PageAuthorize(typeof(CreditvoucherRow))]
    public class CreditvoucherController : Controller
    {
        [Route("Financial/Creditvoucher")]
        public ActionResult Index()
        {
            return View("~/Modules/Financial/Creditvoucher/CreditvoucherIndex.cshtml");
        }
    }
}