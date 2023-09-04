namespace CloudGarage.Quotations {
    export interface QuotationjobitemsForm {
        JobType: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class QuotationjobitemsForm extends Serenity.PrefixedContext {
        static formKey = 'Quotations.Quotationjobitems';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!QuotationjobitemsForm.init)  {
                QuotationjobitemsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(QuotationjobitemsForm, [
                    'JobType', w0,
                    'UnitPrice', w1,
                    'Discount', w1,
                    'Description', w2
                ]);
            }
        }
    }
}
