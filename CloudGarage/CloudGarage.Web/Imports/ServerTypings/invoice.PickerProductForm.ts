namespace CloudGarage.invoice {
    export interface PickerProductForm {
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        GrandTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TotalDiscount: Serenity.DecimalEditor;
        NoTax: Serenity.BooleanEditor;
        Vat: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        NetTotal: Serenity.DecimalEditor;
        PaidAmount: Serenity.DecimalEditor;
        Due: Serenity.DecimalEditor;
        Change: Serenity.DecimalEditor;
        Details: Serenity.TextAreaEditor;
    }

    export class PickerProductForm extends Serenity.PrefixedContext {
        static formKey = 'invoice.PickerOrder';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PickerProductForm.init)  {
                PickerProductForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(PickerProductForm, [
                    'CustomerId', w0,
                    'Date', w1,
                    'PaymentAccount', w0,
                    'GrandTotal', w2,
                    'Discount', w2,
                    'TotalDiscount', w2,
                    'NoTax', w3,
                    'Vat', w2,
                    'TotalTax', w2,
                    'ShippingCost', w2,
                    'NetTotal', w2,
                    'PaidAmount', w2,
                    'Due', w2,
                    'Change', w2,
                    'Details', w4
                ]);
            }
        }
    }
}
