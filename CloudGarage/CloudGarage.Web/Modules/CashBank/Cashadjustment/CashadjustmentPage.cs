using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.CashBank.Pages
{

    [PageAuthorize(typeof(CashadjustmentRow))]
    public class CashadjustmentController : Controller
    {
        [Route("CashBank/CashAdjustment")]
        public ActionResult Index()
        {
            return View("~/Modules/CashBank/CashAdjustment/CashadjustmentIndex.cshtml");
        }
    }
}