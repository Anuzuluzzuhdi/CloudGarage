namespace CloudGarage.CashBank {
    export interface CustomerreceiveForm {
        VDate: Serenity.DateEditor;
        Vtype: Serenity.EnumEditor;
        CustomerId: Serenity.LookupEditor;
        CoaId: Serenity.LookupEditor;
        Debit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }

    export class CustomerreceiveForm extends Serenity.PrefixedContext {
        static formKey = 'CashBank.Customerreceive';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerreceiveForm.init)  {
                CustomerreceiveForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.EnumEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(CustomerreceiveForm, [
                    'VDate', w0,
                    'Vtype', w1,
                    'CustomerId', w2,
                    'CoaId', w2,
                    'Debit', w3,
                    'Narration', w4
                ]);
            }
        }
    }
}
