using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(VehiclemodelsRow))]
    public class VehiclemodelsController : Controller
    {
        [Route("Masters/Vehiclemodels")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Vehiclemodels/VehiclemodelsIndex.cshtml");
        }
    }
}