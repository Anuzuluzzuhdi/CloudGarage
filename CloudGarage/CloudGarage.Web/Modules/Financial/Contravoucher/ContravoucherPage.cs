using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Financial.Pages
{

    [PageAuthorize(typeof(ContravoucherRow))]
    public class ContravoucherController : Controller
    {
        [Route("Financial/Contravoucher")]
        public ActionResult Index()
        {
            return View("~/Modules/Financial/Contravoucher/ContravoucherIndex.cshtml");
        }
    }
}