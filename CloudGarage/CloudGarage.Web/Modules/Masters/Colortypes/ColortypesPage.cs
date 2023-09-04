using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(ColortypesRow))]
    public class ColortypesController : Controller
    {
        [Route("Masters/Colortypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Colortypes/ColortypesIndex.cshtml");
        }
    }
}