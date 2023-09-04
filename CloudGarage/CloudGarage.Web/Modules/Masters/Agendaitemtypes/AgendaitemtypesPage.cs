using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Masters.Pages
{

    [PageAuthorize(typeof(AgendaitemtypesRow))]
    public class AgendaitemtypesController : Controller
    {
        [Route("Masters/Agendaitemtypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Masters/Agendaitemtypes/AgendaitemtypesIndex.cshtml");
        }
    }
}