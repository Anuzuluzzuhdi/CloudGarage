using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(VehiclemakesRow))]
    public class VehiclemakesController : Controller
    {
        [Route("Masters/Vehiclemakes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Vehiclemakes/VehiclemakesIndex.cshtml");
        }
    }
}