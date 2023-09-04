namespace CloudGarage.Financial {
    export interface ContravoucherForm {
        VDate: Serenity.DateEditor;
        Vtype: Serenity.EnumEditor;
        CoaId: Serenity.LookupEditor;
        Debit: Serenity.DecimalEditor;
        Credit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }

    export class ContravoucherForm extends Serenity.PrefixedContext {
        static formKey = 'Financial.Contravoucher';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ContravoucherForm.init)  {
                ContravoucherForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.EnumEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(ContravoucherForm, [
                    'VDate', w0,
                    'Vtype', w1,
                    'CoaId', w2,
                    'Debit', w3,
                    'Credit', w3,
                    'Narration', w4
                ]);
            }
        }
    }
}
