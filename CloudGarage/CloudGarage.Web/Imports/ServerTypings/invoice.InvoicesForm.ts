namespace CloudGarage.invoice {
    export interface InvoicesForm {
        CustomerId: Serenity.LookupEditor;
        Jobcard: Serenity.LookupEditor;
        Vehicle: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        ScheduleDatetime: Serenity.DateEditor;
        DeliveryDatetime: Serenity.DateEditor;
        PaymentAccount: Serenity.LookupEditor;
        Jobs: JobItemsEditor;
        LineItems: PickerProductDetailEditor;
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

    export class InvoicesForm extends Serenity.PrefixedContext {
        static formKey = 'invoice.Invoices';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoicesForm.init)  {
                InvoicesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = JobItemsEditor;
                var w3 = PickerProductDetailEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.BooleanEditor;
                var w6 = s.TextAreaEditor;

                Q.initFormType(InvoicesForm, [
                    'CustomerId', w0,
                    'Jobcard', w0,
                    'Vehicle', w0,
                    'Date', w1,
                    'ScheduleDatetime', w1,
                    'DeliveryDatetime', w1,
                    'PaymentAccount', w0,
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
                    'PaidAmount', w4,
                    'Due', w4,
                    'Change', w4,
                    'Details', w6
                ]);
            }
        }
    }
}
