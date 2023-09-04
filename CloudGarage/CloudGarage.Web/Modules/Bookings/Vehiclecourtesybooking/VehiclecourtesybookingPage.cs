using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Bookings.Pages
{

    [PageAuthorize(typeof(VehiclecourtesybookingRow))]
    public class VehiclecourtesybookingController : Controller
    {
        [Route("Bookings/VehicleCourtesyBooking")]
        public ActionResult Index()
        {
            return View("~/Modules/Bookings/VehicleCourtesyBooking/VehiclecourtesybookingIndex.cshtml");
        }
    }
}