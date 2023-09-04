namespace CloudGarage.BusinessPartners {
    export interface SuppliersForm {
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        StateId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        RegionId: Serenity.LookupEditor;
        PostalCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Website: Serenity.StringEditor;
        SupplierGroupId: Serenity.LookupEditor;
        PreviousCreditBalance: Serenity.DecimalEditor;
    }

    export class SuppliersForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessPartners.Suppliers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SuppliersForm.init)  {
                SuppliersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(SuppliersForm, [
                    'CompanyName', w0,
                    'ContactName', w0,
                    'ContactTitle', w0,
                    'Address', w0,
                    'CountryId', w1,
                    'StateId', w1,
                    'CityId', w1,
                    'RegionId', w1,
                    'PostalCode', w0,
                    'Phone', w0,
                    'Email', w0,
                    'Website', w0,
                    'SupplierGroupId', w1,
                    'PreviousCreditBalance', w2
                ]);
            }
        }
    }
}
