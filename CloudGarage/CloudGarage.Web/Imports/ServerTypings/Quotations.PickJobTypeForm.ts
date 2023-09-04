namespace CloudGarage.Quotations {
    export interface PickJobTypeForm {
        CustomerId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.IntegerEditor;
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

    export class PickJobTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Quotations.PickOrder';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PickJobTypeForm.init)  {
                PickJobTypeForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.BooleanEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(PickJobTypeForm, [
                    'CustomerId', w0,
                    'Date', w1,
                    'PaymentAccount', w2,
                    'GrandTotal', w3,
                    'Discount', w3,
                    'TotalDiscount', w3,
                    'NoTax', w4,
                    'Vat', w3,
                    'TotalTax', w3,
                    'ShippingCost', w3,
                    'NetTotal', w3,
                    'PaidAmount', w3,
                    'Due', w3,
                    'Change', w3,
                    'Details', w5
                ]);
            }
        }
    }
}
