using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.CashBank.Pages
{

    [PageAuthorize(typeof(BanktransactionsRow))]
    public class BanktransactionsController : Controller
    {
        [Route("CashBank/BankTransactions")]
        public ActionResult Index()
        {
            return View("~/Modules/CashBank/BankTransactions/BanktransactionsIndex.cshtml");
        }
    }
}