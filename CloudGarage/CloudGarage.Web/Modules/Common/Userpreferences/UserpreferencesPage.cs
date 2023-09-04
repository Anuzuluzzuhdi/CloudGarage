using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Common.Pages
{

    [PageAuthorize(typeof(UserpreferencesRow))]
    public class UserpreferencesController : Controller
    {
        [Route("Common/Userpreferences")]
        public ActionResult Index()
        {
            return View("~/Modules/Common/Userpreferences/UserpreferencesIndex.cshtml");
        }
    }
}