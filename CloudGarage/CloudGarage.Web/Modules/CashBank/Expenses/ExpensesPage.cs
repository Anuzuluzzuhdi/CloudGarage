using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.CashBank.Pages
{

    [PageAuthorize(typeof(ExpensesRow))]
    public class ExpensesController : Controller
    {
        [Route("CashBank/Expenses")]
        public ActionResult Index()
        {
            return View("~/Modules/CashBank/Expenses/ExpensesIndex.cshtml");
        }
    }
}