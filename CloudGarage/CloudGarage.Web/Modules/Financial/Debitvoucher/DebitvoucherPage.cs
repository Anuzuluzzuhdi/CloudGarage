using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Financial.Pages
{

    [PageAuthorize(typeof(DebitvoucherRow))]
    public class DebitvoucherController : Controller
    {
        [Route("Financial/Debitvoucher")]
        public ActionResult Index()
        {
            return View("~/Modules/Financial/Debitvoucher/DebitvoucherIndex.cshtml");
        }
    }
}