using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace CloudGarage.Note.Pages
{

    [PageAuthorize(typeof(NoteRow))]
    public class NoteController : Controller
    {
        [Route("Note/Note")]
        public ActionResult Index()
        {
            return View("~/Modules/Note/Note/NoteIndex.cshtml");
        }
    }
}