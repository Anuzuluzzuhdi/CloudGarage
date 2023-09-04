using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(CompaniesRow))]
    public class CompaniesController : Controller
    {
        [Route("Masters/Companies")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Companies/CompaniesIndex.cshtml");
        }
    }
}