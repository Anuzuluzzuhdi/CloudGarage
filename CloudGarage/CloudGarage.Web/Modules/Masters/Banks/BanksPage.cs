using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(BanksRow))]
    public class BanksController : Controller
    {
        [Route("Masters/Banks")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Banks/BanksIndex.cshtml");
        }
    }
}