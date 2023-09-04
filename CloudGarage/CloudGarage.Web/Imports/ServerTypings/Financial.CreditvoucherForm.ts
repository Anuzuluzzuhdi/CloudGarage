namespace CloudGarage.Financial {
    export interface CreditvoucherForm {
        VDate: Serenity.DateEditor;
        Vtype: Serenity.EnumEditor;
        CoaId: Serenity.LookupEditor;
        CreditAccountId: Serenity.LookupEditor;
        Debit: Serenity.DecimalEditor;
        Remark: Serenity.TextAreaEditor;
    }

    export class CreditvoucherForm extends Serenity.PrefixedContext {
        static formKey = 'Financial.Creditvoucher';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CreditvoucherForm.init)  {
                CreditvoucherForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.EnumEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(CreditvoucherForm, [
                    'VDate', w0,
                    'Vtype', w1,
                    'CoaId', w2,
                    'CreditAccountId', w2,
                    'Debit', w3,
                    'Remark', w4
                ]);
            }
        }
    }
}
