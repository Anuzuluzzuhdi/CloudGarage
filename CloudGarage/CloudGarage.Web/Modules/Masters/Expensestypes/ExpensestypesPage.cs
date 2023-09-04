using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(ExpensestypesRow))]
    public class ExpensestypesController : Controller
    {
        [Route("Masters/Expensestypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Expensestypes/ExpensestypesIndex.cshtml");
        }
    }
}