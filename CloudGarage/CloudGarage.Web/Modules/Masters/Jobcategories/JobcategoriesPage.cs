using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(JobcategoriesRow))]
    public class JobcategoriesController : Controller
    {
        [Route("Masters/Jobcategories")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Jobcategories/JobcategoriesIndex.cshtml");
        }
    }
}