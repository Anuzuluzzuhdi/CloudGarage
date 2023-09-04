namespace CloudGarage.invoice {
    export interface InvoicejobitemsForm {
        JobType: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class InvoicejobitemsForm extends Serenity.PrefixedContext {
        static formKey = 'invoice.Invoicejobitems';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoicejobitemsForm.init)  {
                InvoicejobitemsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(InvoicejobitemsForm, [
                    'JobType', w0,
                    'UnitPrice', w1,
                    'Discount', w1,
                    'Description', w2
                ]);
            }
        }
    }
}
