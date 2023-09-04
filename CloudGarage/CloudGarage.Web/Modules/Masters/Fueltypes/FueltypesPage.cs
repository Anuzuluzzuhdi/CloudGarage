using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(FueltypesRow))]
    public class FueltypesController : Controller
    {
        [Route("Masters/Fueltypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Fueltypes/FueltypesIndex.cshtml");
        }
    }
}