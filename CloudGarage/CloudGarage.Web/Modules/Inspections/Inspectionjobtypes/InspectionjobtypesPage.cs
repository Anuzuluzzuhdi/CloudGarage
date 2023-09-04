using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Inspections.Pages
{

    [PageAuthorize(typeof(InspectionjobtypesRow))]
    public class InspectionjobtypesController : Controller
    {
        [Route("Inspections/Inspectionjobtypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Inspections/Inspectionjobtypes/InspectionjobtypesIndex.cshtml");
        }
    }
}