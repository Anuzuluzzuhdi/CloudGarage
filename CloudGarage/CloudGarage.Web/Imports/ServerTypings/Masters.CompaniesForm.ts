namespace CloudGarage.Masters {
    export interface CompaniesForm {
        CompanyName: Serenity.StringEditor;
        CompanyEmail: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        CurrencyId: Serenity.LookupEditor;
        VatPercentage: Serenity.DecimalEditor;
        Logo: Serenity.ImageUploadEditor;
        SaleLogo: Serenity.ImageUploadEditor;
        Favicon: Serenity.ImageUploadEditor;
        CurrencyPosition: Serenity.EnumEditor;
        FooterText: Serenity.TextAreaEditor;
    }

    export class CompaniesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Companies';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CompaniesForm.init)  {
                CompaniesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.EnumEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(CompaniesForm, [
                    'CompanyName', w0,
                    'CompanyEmail', w0,
                    'Address', w0,
                    'Phone', w0,
                    'CurrencyId', w1,
                    'VatPercentage', w2,
                    'Logo', w3,
                    'SaleLogo', w3,
                    'Favicon', w3,
                    'CurrencyPosition', w4,
                    'FooterText', w5
                ]);
            }
        }
    }
}
