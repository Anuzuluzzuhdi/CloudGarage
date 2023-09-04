using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Financial.Pages
{

    [PageAuthorize(typeof(JournalvoucherRow))]
    public class JournalvoucherController : Controller
    {
        [Route("Financial/Journalvoucher")]
        public ActionResult Index()
        {
            return View("~/Modules/Financial/Journalvoucher/JournalvoucherIndex.cshtml");
        }
    }
}