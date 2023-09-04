using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Reports.Pages
{

    [PageAuthorize(typeof(DailyclosingRow))]
    public class DailyclosingController : Controller
    {
        [Route("Reports/Dailyclosing")]
        public ActionResult Index()
        {
            return View("~/Modules/Reports/Dailyclosing/DailyclosingIndex.cshtml");
        }
    }
}