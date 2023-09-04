using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(JobtypesRow))]
    public class JobtypesController : Controller
    {
        [Route("Masters/Jobtypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Jobtypes/JobtypesIndex.cshtml");
        }
    }
}