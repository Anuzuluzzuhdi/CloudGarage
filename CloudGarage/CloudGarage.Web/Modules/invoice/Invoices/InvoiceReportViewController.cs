using Dapper;
using Microsoft.AspNetCore.Mvc;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Linq;
using System.Globalization;
using FastReport.Web;
using System.IO;
using System.Data;
using FastReport.Data;
using FastReport.Export.PdfSimple;

namespace CloudGarage.invoice
{
    [Route("Reports/Print/Invoices/View/[action]")]
    public class QuotationReportViewController : Controller
    {
        [HttpGet]
        public ActionResult Print(
            [FromServices] ITwoLevelCache cache,
            [FromServices] ISqlConnections sqlConnections,
            String InvoicesId
            )
        {
            var webReport = new WebReport();
            FastReport.Utils.RegisteredObjects.AddConnection(typeof(MySqlDataConnection));
            webReport.Report.Load(Path.Combine("D:/PKL UBIG/coba nota", $"Invoices Br.frx"));
            webReport.Report.Dictionary.Connections[0].ConnectionString = "Server=localhost; port=3307;Database=CloudGarage1;user=root; password=;";
            webReport.Report.SetParameterValue("Id", Int32.Parse(InvoicesId));
            webReport.Report.Prepare();

            using (MemoryStream ms = new MemoryStream())
            {
                PDFSimpleExport pdfExport = new PDFSimpleExport();
                pdfExport.Export(webReport.Report, ms);
                ms.Flush();
                return File(ms.ToArray(), "application/pdf");
            }
        }
    }
}