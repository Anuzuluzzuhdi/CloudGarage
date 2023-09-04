using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(BranchesRow))]
    public class BranchesController : Controller
    {
        [Route("Masters/Branches")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Branches/BranchesIndex.cshtml");
        }
    }
}