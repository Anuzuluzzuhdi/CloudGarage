using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Bookings.Pages
{

    [PageAuthorize(typeof(VehiclebookingsRow))]
    public class VehiclebookingsController : Controller
    {
        [Route("Bookings/VehicleBookings")]
        public ActionResult Index()
        {
            return View("~/Modules/Bookings/VehicleBookings/VehiclebookingsIndex.cshtml");
        }
    }
}