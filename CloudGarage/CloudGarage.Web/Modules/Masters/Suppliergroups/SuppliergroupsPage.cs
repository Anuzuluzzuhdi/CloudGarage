using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(SuppliergroupsRow))]
    public class SuppliergroupsController : Controller
    {
        [Route("Masters/Suppliergroups")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Suppliergroups/SuppliergroupsIndex.cshtml");
        }
    }
}