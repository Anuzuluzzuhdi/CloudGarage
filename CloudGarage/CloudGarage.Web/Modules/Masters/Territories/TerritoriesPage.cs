using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(TerritoriesRow))]
    public class TerritoriesController : Controller
    {
        [Route("Masters/Territories")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Territories/TerritoriesIndex.cshtml");
        }
    }
}