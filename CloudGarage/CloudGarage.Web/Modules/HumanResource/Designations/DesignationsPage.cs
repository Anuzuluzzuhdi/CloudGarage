using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.HumanResource.Pages
{

    [PageAuthorize(typeof(DesignationsRow))]
    public class DesignationsController : Controller
    {
        [Route("HumanResource/Designations")]
        public ActionResult Index()
        {
            return View("~/Modules/HumanResource/Designations/DesignationsIndex.cshtml");
        }
    }
}