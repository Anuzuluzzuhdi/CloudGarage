#pragma checksum "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Errors\ValidationError.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "e3bacad6f4bde659b5f017269b9f7560a4001790"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Errors_ValidationError), @"mvc.1.0.view", @"/Views/Errors/ValidationError.cshtml")]
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
#line 1 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\_ViewImports.cshtml"
using Serenity;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\_ViewImports.cshtml"
using Serenity.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\_ViewImports.cshtml"
using CloudGarage;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Html;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e3bacad6f4bde659b5f017269b9f7560a4001790", @"/Views/Errors/ValidationError.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e3de7c4b5c1436f7e02ddf7ff0b31a628b812840", @"/Views/_ViewImports.cshtml")]
    #nullable restore
    public class Views_Errors_ValidationError : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Serenity.Services.ValidationError>
    #nullable disable
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 4 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Errors\ValidationError.cshtml"
  
    ViewData["Title"] = Texts.Site.ValidationError.Title.ToString(Localizer);
    ViewData["PageId"] = "ValidationError";
    Layout = User.IsLoggedIn() ? MVC.Views.Shared._Layout : MVC.Views.Shared._LayoutNoNavigation;

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<style type=\"text/css\">\r\n    div.message {\r\n        background: #FFDFDF url(");
#nullable restore
#line 12 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Errors\ValidationError.cshtml"
                           Write(Url.Content("~/Content/serenity/images/dialog-alert.png"));

#line default
#line hidden
#nullable disable
            WriteLiteral(@") no-repeat 30px 25px;
        padding: 30px 30px 30px 90px;
        margin: 100px auto;
        min-height: 170px;
        max-width: 70%;
        min-width: 400px;
        border-radius: 8px;
        border: 2px solid #ECC2C2;
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
    }

    h1 {
        color: red;
        font-size: 30px;
    }

    h3 {
        font-size: 18px;
        color: maroon;
        margin-top: 16px;
        line-height: 26px;
    }

    a.redirect {
        display: block;
        float: left;
        margin-top: 40px;
        font-size: 14px;
    }

    div.date-time {
        float: right;
        margin-top: 40px;
        font-weight: bold;
        font-style: italic;
        color: #966;
    }
</style>

<div class=""page-content"">
    <div class=""message"">
        <h1>");
#nullable restore
#line 53 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Errors\ValidationError.cshtml"
       Write(Texts.Site.ValidationError.Title.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral("</h1>\r\n        <h3>");
#nullable restore
#line 54 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Errors\ValidationError.cshtml"
       Write(Model.Message);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h3>\r\n        <div class=\"date-time\">\r\n            ");
#nullable restore
#line 56 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Errors\ValidationError.cshtml"
       Write(DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss"));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </div>\r\n        <div class=\"clear\"></div>\r\n    </div>\r\n</div>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Serenity.Services.ValidationError> Html { get; private set; } = default!;
        #nullable disable
    }
}
#pragma warning restore 1591
