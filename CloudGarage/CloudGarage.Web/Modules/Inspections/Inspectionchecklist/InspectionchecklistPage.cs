using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Inspections.Pages
{

    [PageAuthorize(typeof(InspectionchecklistRow))]
    public class InspectionchecklistController : Controller
    {
        [Route("Inspections/Inspectionchecklist")]
        public ActionResult Index()
        {
            return View("~/Modules/Inspections/Inspectionchecklist/InspectionchecklistIndex.cshtml");
        }
    }
}