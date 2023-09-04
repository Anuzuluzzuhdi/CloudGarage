using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Vehicles.Pages
{

    [PageAuthorize(typeof(VehicleRow))]
    public class VehicleController : Controller
    {
        [Route("Vehicles/Vehicle")]
        public ActionResult Index()
        {
            return View("~/Modules/Vehicles/Vehicle/VehicleIndex.cshtml");
        }
    }
}