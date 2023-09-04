using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(CustomergroupsRow))]
    public class CustomergroupsController : Controller
    {
        [Route("Masters/Customergroups")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Customergroups/CustomergroupsIndex.cshtml");
        }
    }
}