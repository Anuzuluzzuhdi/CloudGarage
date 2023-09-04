using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(AssemblytypesRow))]
    public class AssemblytypesController : Controller
    {
        [Route("Masters/Assemblytypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Assemblytypes/AssemblytypesIndex.cshtml");
        }
    }
}