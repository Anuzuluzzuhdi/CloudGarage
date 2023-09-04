using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(ShippersRow))]
    public class ShippersController : Controller
    {
        [Route("Masters/Shippers")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Shippers/ShippersIndex.cshtml");
        }
    }
}