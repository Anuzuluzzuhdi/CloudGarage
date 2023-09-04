using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.JobCards.Pages
{

    [PageAuthorize(typeof(JobcarddetailsRow))]
    public class JobcarddetailsController : Controller
    {
        [Route("JobCards/Jobcarddetails")]
        public ActionResult Index()
        {
            return View("~/Modules/JobCards/Jobcarddetails/JobcarddetailsIndex.cshtml");
        }
    }
}