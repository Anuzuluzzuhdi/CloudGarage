#pragma checksum "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Purchasing\Purchase\PurchaseIndex.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "ad44238fd84800c5ac66c89adf4d699c16a4525b"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Purchasing_Purchase_PurchaseIndex), @"mvc.1.0.view", @"/Modules/Purchasing/Purchase/PurchaseIndex.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ad44238fd84800c5ac66c89adf4d699c16a4525b", @"/Modules/Purchasing/Purchase/PurchaseIndex.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"5bb0ec187ff03204f8ac2c0e5b5b35db6955b454", @"/Modules/_ViewImports.cshtml")]
    #nullable restore
    public class Modules_Purchasing_Purchase_PurchaseIndex : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    #nullable disable
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 2 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Purchasing\Purchase\PurchaseIndex.cshtml"
  
    ViewData["Title"] = Localizer.Get("Db.Purchasing.Purchase.EntityPlural");

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<div id=\"GridDiv\"></div>\r\n\r\n<script type=\"text/javascript\">\r\n    jQuery(function () {\r\n        new CloudGarage.Purchasing.PurchaseGrid($(\'#GridDiv\'), {}).init();\r\n\r\n        Q.initFullHeightGridPage($(\'#GridDiv\'));\r\n    });\r\n</script>");
        }
        #pragma warning restore 1998
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public Serenity.ITextLocalizer Localizer { get; private set; } = default!;
        #nullable disable
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; } = default!;
        #nullable disable
    }
}
#pragma warning restore 1591
