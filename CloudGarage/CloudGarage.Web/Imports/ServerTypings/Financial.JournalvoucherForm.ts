namespace CloudGarage.Financial {
    export interface JournalvoucherForm {
        VDate: Serenity.DateEditor;
        Vtype: Serenity.EnumEditor;
        CoaId: Serenity.LookupEditor;
        Debit: Serenity.DecimalEditor;
        Credit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }

    export class JournalvoucherForm extends Serenity.PrefixedContext {
        static formKey = 'Financial.Journalvoucher';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!JournalvoucherForm.init)  {
                JournalvoucherForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.EnumEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(JournalvoucherForm, [
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
