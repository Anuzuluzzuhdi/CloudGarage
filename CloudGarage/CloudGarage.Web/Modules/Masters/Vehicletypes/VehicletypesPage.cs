using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(VehicletypesRow))]
    public class VehicletypesController : Controller
    {
        [Route("Masters/Vehicletypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Vehicletypes/VehicletypesIndex.cshtml");
        }
    }
}