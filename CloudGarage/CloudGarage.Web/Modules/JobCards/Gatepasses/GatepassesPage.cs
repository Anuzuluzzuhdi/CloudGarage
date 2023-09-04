using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.JobCards.Pages
{

    [PageAuthorize(typeof(GatepassesRow))]
    public class GatepassesController : Controller
    {
        [Route("JobCards/Gatepasses")]
        public ActionResult Index()
        {
            return View("~/Modules/JobCards/Gatepasses/GatepassesIndex.cshtml");
        }
    }
}