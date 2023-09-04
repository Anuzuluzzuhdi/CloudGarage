namespace CloudGarage.Purchasing {
    export interface PickerOrderFormPurchase {
        CustomerId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        LineItems: PickerOrderDetailsEditor1;
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

    export class PickerOrderFormPurchase extends Serenity.PrefixedContext {
        static formKey = 'Purchasing.PickerOrder';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PickerOrderFormPurchase.init)  {
                PickerOrderFormPurchase.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = PickerOrderDetailsEditor1;
                var w4 = s.DecimalEditor;
                var w5 = s.BooleanEditor;
                var w6 = s.TextAreaEditor;

                Q.initFormType(PickerOrderFormPurchase, [
                    'CustomerId', w0,
                    'Date', w1,
                    'PaymentAccount', w2,
                    'LineItems', w3,
                    'GrandTotal', w4,
                    'Discount', w4,
                    'TotalDiscount', w4,
                    'NoTax', w5,
                    'Vat', w4,
                    'TotalTax', w4,
                    'ShippingCost', w4,
                    'NetTotal', w4,
                    'PaidAmount', w4,
                    'Due', w4,
                    'Change', w4,
                    'Details', w6
                ]);
            }
        }
    }
}
