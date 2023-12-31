#pragma checksum "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "5bbdea586ff6ce3b8236f75df41622e2fe1b3909"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared__Layout), @"mvc.1.0.view", @"/Views/Shared/_Layout.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"5bbdea586ff6ce3b8236f75df41622e2fe1b3909", @"/Views/Shared/_Layout.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e3de7c4b5c1436f7e02ddf7ff0b31a628b812840", @"/Views/_ViewImports.cshtml")]
    #nullable restore
    public class Views_Shared__Layout : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    #nullable disable
    {
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.PartialTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("<!DOCTYPE html>\r\n");
#nullable restore
#line 3 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
  
    Func<string, HtmlString> json = x => new HtmlString(Serenity.JSON.Stringify(x));
    var hideNav = (string)Context.Request.Query["hideNav"] == "1";
    var themeCookie = Context.Request.Cookies["ProThemeSelection"];
    var theme = themeCookie != null && !themeCookie.IsEmptyOrNull() ? themeCookie : "azure-light";
    var rtl = System.Globalization.CultureInfo.CurrentUICulture.TextInfo.IsRightToLeft;
    var sidebarPaneCollapsed = Context?.Request?.Cookies?["SidebarPaneCollapsed"] == "1" ? " s-sidebar-pane-collapsed" : "";

#line default
#line hidden
#nullable disable
            WriteLiteral("<html");
            BeginWriteAttribute("lang", " lang=\"", 643, "\"", 705, 1);
#nullable restore
#line 11 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
WriteAttributeValue("", 650, System.Globalization.CultureInfo.CurrentUICulture.Name, 650, 55, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            BeginWriteAttribute("class", " class=\"", 706, "\"", 764, 4);
            WriteAttributeValue("", 714, "pro", 714, 3, true);
            WriteAttributeValue(" ", 717, "theme-", 718, 7, true);
#nullable restore
#line 11 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
WriteAttributeValue("", 724, theme, 724, 6, false);

#line default
#line hidden
#nullable disable
#nullable restore
#line 11 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
WriteAttributeValue("", 730, hideNav ? " no-navigation" : "", 730, 34, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" ");
#nullable restore
#line 11 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
                                                                                                                           Write(Html.Raw(rtl ? " dir=\"rtl\"" : ""));

#line default
#line hidden
#nullable disable
            WriteLiteral(">\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "5bbdea586ff6ce3b8236f75df41622e2fe1b39096103", async() => {
                WriteLiteral("\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("partial", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "5bbdea586ff6ce3b8236f75df41622e2fe1b39096365", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.PartialTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper);
                BeginWriteTagHelperAttribute();
#nullable restore
#line 13 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
       WriteLiteral(MVC.Views.Shared._LayoutHead);

#line default
#line hidden
#nullable disable
                __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
                __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper.Name = __tagHelperStringValueBuffer;
                __tagHelperExecutionContext.AddTagHelperAttribute("name", __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper.Name, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n    ");
#nullable restore
#line 14 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
Write(RenderSection("Head", false));

#line default
#line hidden
#nullable disable
                WriteLiteral("\r\n    <title>");
#nullable restore
#line 15 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
       Write(ViewData["Title"]);

#line default
#line hidden
#nullable disable
                WriteLiteral(" - CloudGarage</title>\r\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "5bbdea586ff6ce3b8236f75df41622e2fe1b39099255", async() => {
                WriteLiteral("\r\n<div id=\"PageBackground\" style=\"display: none\"></div>\r\n");
#nullable restore
#line 19 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
 if (hideNav)
{

#line default
#line hidden
#nullable disable
                WriteLiteral("    <script type=\"text/javascript\">\r\n        $(function () {\r\n            ");
#nullable restore
#line 23 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
       Write(RenderSection("PageInitScript", false));

#line default
#line hidden
#nullable disable
                WriteLiteral("\r\n        });\r\n    </script>\r\n    <div id=\"page-outer-nonav\">\r\n        <div id=\"page-container\" class=\"page-container-common\">\r\n            ");
#nullable restore
#line 28 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
       Write(RenderBody());

#line default
#line hidden
#nullable disable
                WriteLiteral("\r\n        </div>\r\n    </div>\r\n");
#nullable restore
#line 31 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
}
else
{

#line default
#line hidden
#nullable disable
                WriteLiteral("    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("partial", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "5bbdea586ff6ce3b8236f75df41622e2fe1b390910796", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.PartialTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper);
                BeginWriteTagHelperAttribute();
#nullable restore
#line 34 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
      WriteLiteral(MVC.Views.Shared._Sidebar);

#line default
#line hidden
#nullable disable
                __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
                __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper.Name = __tagHelperStringValueBuffer;
                __tagHelperExecutionContext.AddTagHelperAttribute("name", __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper.Name, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
#nullable restore
#line 34 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
__Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper.Model = (NavigationModelFactory.Create());

#line default
#line hidden
#nullable disable
                __tagHelperExecutionContext.AddTagHelperAttribute("model", __Microsoft_AspNetCore_Mvc_TagHelpers_PartialTagHelper.Model, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n    <main class=\"s-main\">\r\n        <section class=\"content\">\r\n");
#nullable restore
#line 37 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
             if (IsSectionDefined("ContentHeader"))
            {

#line default
#line hidden
#nullable disable
                WriteLiteral("            <section class=\"content-header\">\r\n                ");
#nullable restore
#line 40 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
           Write(RenderSection("ContentHeader"));

#line default
#line hidden
#nullable disable
                WriteLiteral("\r\n            </section>\r\n");
#nullable restore
#line 42 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
            }

#line default
#line hidden
#nullable disable
                WriteLiteral("\r\n            ");
#nullable restore
#line 44 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
       Write(RenderBody());

#line default
#line hidden
#nullable disable
                WriteLiteral("\r\n        </section>\r\n    </main>\r\n");
#nullable restore
#line 47 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
}

#line default
#line hidden
#nullable disable
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "id", 3, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            AddHtmlAttributeValue("", 976, "s-", 976, 2, true);
#nullable restore
#line 17 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
AddHtmlAttributeValue("", 978, ViewData["PageId"], 978, 21, false);

#line default
#line hidden
#nullable disable
            AddHtmlAttributeValue("", 999, "Page", 999, 4, true);
            EndAddHtmlAttributeValues(__tagHelperExecutionContext);
            BeginAddHtmlAttributeValues(__tagHelperExecutionContext, "class", 3, global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
#nullable restore
#line 17 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
AddHtmlAttributeValue("", 1012, ViewData["BodyClass"], 1012, 24, false);

#line default
#line hidden
#nullable disable
#nullable restore
#line 17 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
AddHtmlAttributeValue(" ", 1036, sidebarPaneCollapsed, 1037, 23, false);

#line default
#line hidden
#nullable disable
#nullable restore
#line 17 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Views\Shared\_Layout.cshtml"
AddHtmlAttributeValue("", 1060, rtl ? " rtl" : "", 1060, 20, false);

#line default
#line hidden
#nullable disable
            EndAddHtmlAttributeValues(__tagHelperExecutionContext);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n</html>");
        }
        #pragma warning restore 1998
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public Serenity.Navigation.INavigationModelFactory NavigationModelFactory { get; private set; } = default!;
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
