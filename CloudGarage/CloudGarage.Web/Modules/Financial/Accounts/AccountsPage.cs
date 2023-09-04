using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Financial.Pages
{

    [PageAuthorize(typeof(AccountsRow))]
    public class AccountsController : Controller
    {
        [Route("Financial/Accounts")]
        public ActionResult Index()
        {
            return View("~/Modules/Financial/Accounts/AccountsIndex.cshtml");
        }
    }
}