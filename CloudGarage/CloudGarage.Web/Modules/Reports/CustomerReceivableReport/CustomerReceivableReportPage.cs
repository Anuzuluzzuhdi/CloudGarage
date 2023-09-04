
namespace CloudGarage.Reports.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Data;

    [PageAuthorize]
    [ReadPermission("Administration:General")]
    public class CustomerReceivableReportController : Controller
    {
        [Route("Reports/CustomerReceivableReport")]
        public ActionResult Index()
        {
            return View("~/Modules/Reports/CustomerReceivableReport/CustomerReceivableReportIndex.cshtml");
        }
    }
}