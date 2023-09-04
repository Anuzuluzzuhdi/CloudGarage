//using Dapper;
//using Microsoft.AspNetCore.Mvc;
//using Serenity.Abstractions;
//using Serenity.Data;
//using Serenity.Web;
//using System;
//using System.Linq;
//using System.Globalization;
//using FastReport.Web;
//using System.IO;
//using System.Data;
//using FastReport.Data;
//using FastReport.Export.PdfSimple;

//namespace CloudGarage.Reports.Pages
//{
//  [Route("Reports/Print/SaleReport/[action]")]
//    public class SaleReportController : Controller
//  {
//    [HttpGet]
//    public ActionResult Index(
//        [FromServices] ITwoLevelCache cache,
//        [FromServices] ISqlConnections sqlConnections
//        )
//        {
//            var webReport = new WebReport();
//            FastReport.Utils.RegisteredObjects.AddConnection(typeof(MySqlDataConnection));
//            webReport.Report.Load(Path.Combine("D:/PKL UBIG/coba nota", $"SalesReport.frx"));
//            webReport.Report.Dictionary.Connections[0].ConnectionString = "Server=localhost; port=3306;Database=CloudGarage;user=root; password=;";
//            webReport.Report.Prepare();
//            return View(webReport);
//            //using (MemoryStream ms = new MemoryStream())
//            //{
//            //    PDFSimpleExport pdfExport = new PDFSimpleExport();
//            //    pdfExport.Export(webReport.Report, ms);
//            //    ms.Flush();   
//            //    return File(ms.ToArray(), "application/pdf", Path.GetFileNameWithoutExtension("Sales Report")+".pdf");
//            //}
//        }
//    }
//}