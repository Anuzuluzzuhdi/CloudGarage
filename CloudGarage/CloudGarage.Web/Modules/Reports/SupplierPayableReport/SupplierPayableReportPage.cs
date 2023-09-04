
namespace CloudGarage.Reports.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;    
    using Serenity.Data;

    [PageAuthorize]    
    [ReadPermission("Administration:General")]
    public class SupplierPayableReportController : Controller
    {
        [Route("Reports/SupplierPayableReport")]
        public ActionResult Index()
        {
           
            return View("~/Modules/Reports/SupplierPayableReport/SupplierPayableReportIndex.cshtml");
        }
       
    }
   
}