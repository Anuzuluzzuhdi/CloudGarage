#pragma checksum "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Errors\AccessDenied.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "fd9088bf091ad119cce72da59ed6e9784385ca1b"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Errors_AccessDenied), @"mvc.1.0.view", @"/Views/Errors/AccessDenied.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"fd9088bf091ad119cce72da59ed6e9784385ca1b", @"/Views/Errors/AccessDenied.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e3de7c4b5c1436f7e02ddf7ff0b31a628b812840", @"/Views/_ViewImports.cshtml")]
    #nullable restore
    public class Views_Errors_AccessDenied : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<string>
    #nullable disable
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 4 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Errors\AccessDenied.cshtml"
  
    ViewData["Title"] = Texts.Site.AccessDenied.PageTitle.ToString(Localizer);
    ViewData["PageId"] = "AccessDenied";
    Layout = User.IsLoggedIn() ?
        "~/Views/Shared/_Layout.cshtml" :
        "~/Views/Shared/_LayoutNoNavigation.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<div class=""page-content"">
    <div class=""message"">
        <table>
            <tr>
                <td style=""width: 200px;"">
                    <i class=""fa fa-times-circle text-red"" style=""font-size: 180px;""></i>
                </td>
                <td>
                    <h1>");
#nullable restore
#line 20 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Errors\AccessDenied.cshtml"
                   Write(Texts.Site.AccessDenied.PageTitle.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral("</h1>\r\n                    <h3>");
#nullable restore
#line 21 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Errors\AccessDenied.cshtml"
                    Write(User.IsLoggedIn() ? Texts.Site.AccessDenied.LackPermissions.ToString(Localizer) : Texts.Site.AccessDenied.NotLoggedIn.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral("</h3>\r\n");
#nullable restore
#line 22 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Errors\AccessDenied.cshtml"
                     if (Model != null)
                    {

#line default
#line hidden
#nullable disable
            WriteLiteral("                        <a class=\"redirect\"");
            BeginWriteAttribute("href", " href=\"", 955, "\"", 993, 2);
            WriteAttributeValue("", 962, "/Account/Login?returnURL=", 962, 25, true);
#nullable restore
#line 24 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Errors\AccessDenied.cshtml"
WriteAttributeValue("", 987, Model, 987, 6, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">");
#nullable restore
#line 24 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Errors\AccessDenied.cshtml"
                                                                               Write(User.IsLoggedIn() ? 
                            Texts.Site.AccessDenied.ClickToChangeUser.ToString(Localizer) : Texts.Site.AccessDenied.ClickToLogin.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral("</a>\r\n");
#nullable restore
#line 26 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Errors\AccessDenied.cshtml"
                    }
                    else
                    {

#line default
#line hidden
#nullable disable
            WriteLiteral("                        <a class=\"redirect\" href=\"/Account/Login\">");
#nullable restore
#line 29 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Errors\AccessDenied.cshtml"
                                                             Write(Texts.Site.AccessDenied.ClickToLogin.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral("</a>\r\n");
#nullable restore
#line 30 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Errors\AccessDenied.cshtml"
                    }

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <div class=\"date-time\">\r\n                        ");
#nullable restore
#line 32 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Errors\AccessDenied.cshtml"
                    Write(!User.IsLoggedIn() ? "" : (User?.Identity?.Name + " - "));

#line default
#line hidden
#nullable disable
#nullable restore
#line 32 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Errors\AccessDenied.cshtml"
                                                                              Write(DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        \r\n    </div>\r\n</div>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<string> Html { get; private set; } = default!;
        #nullable disable
    }
}
#pragma warning restore 1591
