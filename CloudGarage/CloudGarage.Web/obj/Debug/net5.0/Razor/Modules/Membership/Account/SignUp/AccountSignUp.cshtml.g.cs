#pragma checksum "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Membership\Account\SignUp\AccountSignUp.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "24336c5b6cd0301a468e23669b16571b320e7067"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Membership_Account_SignUp_AccountSignUp), @"mvc.1.0.view", @"/Modules/Membership/Account/SignUp/AccountSignUp.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"24336c5b6cd0301a468e23669b16571b320e7067", @"/Modules/Membership/Account/SignUp/AccountSignUp.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"5bb0ec187ff03204f8ac2c0e5b5b35db6955b454", @"/Modules/_ViewImports.cshtml")]
    #nullable restore
    public class Modules_Membership_Account_SignUp_AccountSignUp : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    #nullable disable
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 2 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Membership\Account\SignUp\AccountSignUp.cshtml"
  
    ViewData["Title"] = Texts.Forms.Membership.SignUp.FormTitle.ToString(Localizer);
    ViewData["PageId"] = "SignUp";
    Layout = MVC.Views.Shared._LayoutNoNavigation;

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<script id=\"Template_Membership_SignUpPanel\" type=\"text/template\">\r\n    <h2 class=\"text-center p-4\">\r\n        <img src=\"");
#nullable restore
#line 10 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Membership\Account\SignUp\AccountSignUp.cshtml"
             Write(Url.Content("~/Content/site/images/serenity-logo-w-128.png"));

#line default
#line hidden
#nullable disable
            WriteLiteral("\" \r\n            class=\"rounded-circle p-1\" style=\"background-color: var(--s-sidebar-band-bg)\"\r\n            width=\"50\" height=\"50\" /> CloudGarage\r\n    </h2>\r\n\r\n    <div class=\"s-Panel p-4\">\r\n\r\n        <h5 class=\"text-center my-4\">");
#nullable restore
#line 17 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Membership\Account\SignUp\AccountSignUp.cshtml"
                                Write(Texts.Forms.Membership.SignUp.FormTitle.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral("</h5>\r\n        <p class=\"text-center\">");
#nullable restore
#line 18 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Membership\Account\SignUp\AccountSignUp.cshtml"
                          Write(Texts.Forms.Membership.SignUp.FormInfo.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n\r\n        <form id=\"~_Form\" action=\"\">\r\n            <div id=\"~_PropertyGrid\"></div>\r\n            <div class=\"px-field\">\r\n                <button id=\"~_SubmitButton\" type=\"submit\" class=\"btn btn-primary my-4 w-100\">\r\n                    ");
#nullable restore
#line 24 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Membership\Account\SignUp\AccountSignUp.cshtml"
               Write(Texts.Forms.Membership.SignUp.SubmitButton.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
                </button>
            </div>
        </form>
    </div>
</script>

<div class=""s-full-page justify-content-center"">
    <div id=""SignUpPanel""class=""s-container-narrow"">
    </div>
</div>

<script type=""text/javascript"">
$(function() {
    new CloudGarage.Membership.SignUpPanel($('#SignUpPanel')).init();
});
</script>");
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