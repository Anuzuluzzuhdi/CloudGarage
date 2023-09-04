using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.HumanResource.Pages
{

    [PageAuthorize(typeof(EmployeesRow))]
    public class EmployeesController : Controller
    {
        [Route("HumanResource/Employees")]
        public ActionResult Index()
        {
            return View("~/Modules/HumanResource/Employees/EmployeesIndex.cshtml");
        }
    }
}