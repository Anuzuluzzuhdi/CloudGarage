#pragma checksum "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Membership\Account\ResetPassword\AccountResetPassword.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "a330a4bc24f0bf3535fb030cfb618bc480a9dc1a"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Membership_Account_ResetPassword_AccountResetPassword), @"mvc.1.0.view", @"/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a330a4bc24f0bf3535fb030cfb618bc480a9dc1a", @"/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"5bb0ec187ff03204f8ac2c0e5b5b35db6955b454", @"/Modules/_ViewImports.cshtml")]
    #nullable restore
    public class Modules_Membership_Account_ResetPassword_AccountResetPassword : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<CloudGarage.Membership.ResetPasswordModel>
    #nullable disable
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 4 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Membership\Account\ResetPassword\AccountResetPassword.cshtml"
  
    ViewData["Title"] = Texts.Forms.Membership.ResetPassword.FormTitle.ToString(Localizer);
    ViewData["PageId"] = "ResetPassword";
    Layout = MVC.Views.Shared._LayoutNoNavigation;

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<script id=\"Template_Membership_ResetPasswordPanel\" type=\"text/template\">\r\n<div>\r\n    <h3 class=\"page-title\">");
#nullable restore
#line 12 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Membership\Account\ResetPassword\AccountResetPassword.cshtml"
                      Write(Texts.Forms.Membership.ResetPassword.FormTitle.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</h3>
    <form id=""~_Form"" action="""">
        <div class=""s-Form"">
            <div class=""fieldset ui-widget ui-widget-content ui-corner-all"">
                <div id=""~_PropertyGrid""></div>
                <div class=""clear""></div>
            </div>
            <div class=""buttons"">
                <button id=""~_SubmitButton"" type=""submit"" class=""btn btn-primary"">
                    ");
#nullable restore
#line 21 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Membership\Account\ResetPassword\AccountResetPassword.cshtml"
               Write(Texts.Forms.Membership.ResetPassword.SubmitButton.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                </button>\r\n            </div>\r\n            <input type=\"hidden\" id=\"~_Token\" value=\"");
#nullable restore
#line 24 "C:\Projects\CloudGarage\CloudGarage\CloudGarage\CloudGarage.Web\Modules\Membership\Account\ResetPassword\AccountResetPassword.cshtml"
                                                Write(Model.Token);

#line default
#line hidden
#nullable disable
            WriteLiteral(@""" />
        </div>
    </form>
</div>
</script>

<div class=""page-content"">
    <div id=""ResetPasswordPanel"">
    </div>
</div>

<script type=""text/javascript"">
$(function() {
    new CloudGarage.Membership.ResetPasswordPanel($('#ResetPasswordPanel')).init();
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<CloudGarage.Membership.ResetPasswordModel> Html { get; private set; } = default!;
        #nullable disable
    }
}
#pragma warning restore 1591