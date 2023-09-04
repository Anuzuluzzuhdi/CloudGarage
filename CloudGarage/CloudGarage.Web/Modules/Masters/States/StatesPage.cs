using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(StatesRow))]
    public class StatesController : Controller
    {
        [Route("Masters/States")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/States/StatesIndex.cshtml");
        }
    }
}