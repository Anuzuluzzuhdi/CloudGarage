namespace CloudGarage.Purchasing {
    export interface PurchaseForm {
        SupplierId: Serenity.LookupEditor;
        InvoiceNo: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        BranchesId: Serenity.LookupEditor;
        LineItems: PickOrderDetailsEditor;
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

    export class PurchaseForm extends Serenity.PrefixedContext {
        static formKey = 'Purchasing.Purchase';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseForm.init)  {
                PurchaseForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = PickOrderDetailsEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.BooleanEditor;
                var w6 = s.TextAreaEditor;

                Q.initFormType(PurchaseForm, [
                    'SupplierId', w0,
                    'InvoiceNo', w1,
                    'Date', w2,
                    'PaymentAccount', w0,
                    'BranchesId', w0,
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
