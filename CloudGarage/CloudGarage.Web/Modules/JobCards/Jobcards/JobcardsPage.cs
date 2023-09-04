using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.JobCards.Pages
{

    [PageAuthorize(typeof(JobcardsRow))]
    public class JobcardsController : Controller
    {
        [Route("JobCards/JobCards")]
        public ActionResult Index()
        {
            return View("~/Modules/JobCards/JobCards/JobcardsIndex.cshtml");
        }
    }
}