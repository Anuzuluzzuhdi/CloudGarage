namespace CloudGarage.Quotations {
    export interface QuotationsForm {
        CustomerId: Serenity.LookupEditor;
        BranchesId: Serenity.LookupEditor;
        Vehicle: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        ExpiryDate: Serenity.DateEditor;
        Jobs: QuotationJobItemsEditor;
        LineItems: PickProductDetailEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        NoTax: Serenity.BooleanEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
    }

    export class QuotationsForm extends Serenity.PrefixedContext {
        static formKey = 'Quotations.Quotations';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!QuotationsForm.init)  {
                QuotationsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = QuotationJobItemsEditor;
                var w3 = PickProductDetailEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.BooleanEditor;
                var w6 = s.TextAreaEditor;

                Q.initFormType(QuotationsForm, [
                    'CustomerId', w0,
                    'BranchesId', w0,
                    'Vehicle', w0,
                    'Date', w1,
                    'ExpiryDate', w1,
                    'Jobs', w2,
                    'LineItems', w3,
                    'GrandTotal', w4,
                    'Discount', w4,
                    'TotalDiscount', w4,
                    'NoTax', w5,
                    'Vat', w4,
                    'TotalTax', w4,
                    'ShippingCost', w4,
                    'NetTotal', w4,
                    'Details', w6
                ]);
            }
        }
    }
}
