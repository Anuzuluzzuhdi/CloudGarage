using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.HumanResource.Pages
{

    [PageAuthorize(typeof(DepartmentsRow))]
    public class DepartmentsController : Controller
    {
        [Route("HumanResource/Departments")]
        public ActionResult Index()
        {
            return View("~/Modules/HumanResource/Departments/DepartmentsIndex.cshtml");
        }
    }
}