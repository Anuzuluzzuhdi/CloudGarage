using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Inspections.Pages
{

    [PageAuthorize(typeof(InspectionsRow))]
    public class InspectionsController : Controller
    {
        [Route("Inspections/Inspections")]
        public ActionResult Index()
        {
            return View("~/Modules/Inspections/Inspections/InspectionsIndex.cshtml");
        }
    }
}