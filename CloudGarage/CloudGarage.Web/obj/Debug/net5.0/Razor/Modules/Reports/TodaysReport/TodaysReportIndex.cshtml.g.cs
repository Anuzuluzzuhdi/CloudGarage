#pragma checksum "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "f40e38bc5a79a75bc9f32c6bac09cc0d75a70327"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Reports_TodaysReport_TodaysReportIndex), @"mvc.1.0.view", @"/Modules/Reports/TodaysReport/TodaysReportIndex.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\_ViewImports.cshtml"
using Serenity;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\_ViewImports.cshtml"
using Serenity.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\_ViewImports.cshtml"
using CloudGarage;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\_ViewImports.cshtml"
using Microsoft.AspNetCore.Html;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\_ViewImports.cshtml"
using System.Text;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f40e38bc5a79a75bc9f32c6bac09cc0d75a70327", @"/Modules/Reports/TodaysReport/TodaysReportIndex.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"5bb0ec187ff03204f8ac2c0e5b5b35db6955b454", @"/Modules/_ViewImports.cshtml")]
    #nullable restore
    public class Modules_Reports_TodaysReport_TodaysReportIndex : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<CloudGarage.Reports.Pages.TodaysReportData>
    #nullable disable
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 2 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
  
    ViewData["Title"] = "Todays Report";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<section class=\"invoice\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <h2 class=\"page-header\">\r\n                Today\'s Invoices Report\r\n                <small class=\"pull-right\">Date: ");
#nullable restore
#line 11 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                                           Write(DateTime.Now.ToShortDateString());

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</small>
            </h2>
        </div>
    </div>
    <!-- info row -->
    <div class=""row"">
        <div class=""col-xs-12 table-responsive"">
            <table class=""table table-striped"">
                <thead>
                    <tr>
                        <th style=""text-align:left;width:20%;"">Invoice #</th>
                        <th style=""text-align:left;width:40%;"">Customer</th>
                        <th style=""text-align:left;width:20%;"">Sale Date</th>
                        <th style=""text-align:right;width:20%;"">Total Amount</th>
                    </tr>
                </thead>
                <tbody>
");
#nullable restore
#line 28 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                     foreach (var order in Model.Invoices)
                    {

#line default
#line hidden
#nullable disable
            WriteLiteral("                        <tr>\r\n                            <td style=\"text-align:left\">INV-");
#nullable restore
#line 31 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                                                        Write(order.Id.Value.ToString("0000"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                            <td style=\"text-align:left\">");
#nullable restore
#line 32 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                                                   Write(order.CustomerId);

#line default
#line hidden
#nullable disable
            WriteLiteral(".</td>\r\n                            <td style=\"text-align:left\">");
#nullable restore
#line 33 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                                                    Write(order.Date.Value.ToString("dd MM yyyy"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                            <td style=\"text-align:right\">");
#nullable restore
#line 34 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                                                     Write(order.NetTotal.Value.ToString("#,##0.00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n\r\n\r\n                        </tr>\r\n");
#nullable restore
#line 38 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                    }

#line default
#line hidden
#nullable disable
            WriteLiteral(@"                </tbody>
            </table>
        </div>
        <!-- /.col -->
    </div>
</section>
<section class=""invoice"">
    <div class=""row"">
        <div class=""col-xs-12"">
            <h2 class=""page-header"">
                Today's Sales Report
                <small class=""pull-right"">Date: ");
#nullable restore
#line 50 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                                           Write(DateTime.Now.ToShortDateString());

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</small>
            </h2>
        </div>
    </div>
    <!-- info row -->
    <div class=""row"">
        <div class=""col-xs-12 table-responsive"">
            <table class=""table table-striped"">
                <thead>
                    <tr>
                        <th style=""text-align:left;width:20%;"">Invoice #</th>
                        <th style=""text-align:left;width:40%;"">Customer</th>
                        <th style=""text-align:left;width:20%;"">Sale Date</th>
                        <th style=""text-align:right;width:20%;"">Total Amount</th>
                    </tr>
                </thead>
                <tbody>
");
#nullable restore
#line 67 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                     foreach (var order in Model.SaleOrders)
                    {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <tr>\r\n                        <td style=\"text-align:left\">INV-");
#nullable restore
#line 70 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                                                    Write(order.Id.Value.ToString("0000"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                        <td style=\"text-align:left\">");
#nullable restore
#line 71 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                                               Write(order.CustomerName);

#line default
#line hidden
#nullable disable
            WriteLiteral(".</td>\r\n                        <td style=\"text-align:left\">");
#nullable restore
#line 72 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                                                Write(order.Date.Value.ToString("dd MM yyyy"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                        <td style=\"text-align:right\">");
#nullable restore
#line 73 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                                                 Write(order.NetTotal.Value.ToString("#,##0.00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                       \r\n                       \r\n                    </tr>\r\n");
#nullable restore
#line 77 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                    }

#line default
#line hidden
#nullable disable
            WriteLiteral(@"                </tbody>
            </table>
        </div>
        <!-- /.col -->
    </div>
</section>
<section class=""invoice"">
    <div class=""row"">
        <div class=""col-xs-12"">
            <h2 class=""page-header"">
                Today's Purchase Report
                <small class=""pull-right"">Date: ");
#nullable restore
#line 89 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                                           Write(DateTime.Now.ToShortDateString());

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</small>
            </h2>
        </div>
    </div>
    <!-- info row -->
    <div class=""row"">
        <div class=""col-xs-12 table-responsive"">
            <table class=""table table-striped"">
                <thead>
                    <tr>
                        <th style=""text-align:left ;width:20%;"">BILL #</th>
                        <th style=""text-align:left ;width:40%;"">Supplier</th>
                        <th style=""text-align:left ;width:20%;"">Purchase Date</th>
                        <th style=""text-align:right; width:20%;"">Total Amount</th>                       
                    </tr>
                </thead>
                <tbody>
");
#nullable restore
#line 106 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                     foreach (var order in Model.PurchaseOrders)
                    {

#line default
#line hidden
#nullable disable
            WriteLiteral("                        <tr>\r\n                            <td style=\"text-align:left\">BIL-");
#nullable restore
#line 109 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                                                        Write(order.Id.Value.ToString("0000"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                            <td style=\"text-align:left\">");
#nullable restore
#line 110 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                                                   Write(order.SupplierCompanyName);

#line default
#line hidden
#nullable disable
            WriteLiteral(".</td>\r\n                            <td style=\"text-align:left\">");
#nullable restore
#line 111 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                                                    Write(order.Date.Value.ToString("dd MM yyyy"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                            <td style=\"text-align:right\">");
#nullable restore
#line 112 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                                                     Write(order.NetTotal.Value.ToString("#,##0.00"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n\r\n                          \r\n                        </tr>\r\n");
#nullable restore
#line 116 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Reports\TodaysReport\TodaysReportIndex.cshtml"
                    }

#line default
#line hidden
#nullable disable
            WriteLiteral("                </tbody>\r\n            </table>\r\n        </div>\r\n        <!-- /.col -->\r\n    </div>\r\n</section>");
        }
        #pragma warning restore 1998
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<CloudGarage.Reports.Pages.TodaysReportData> Html { get; private set; } = default!;
        #nullable disable
    }
}
#pragma warning restore 1591
