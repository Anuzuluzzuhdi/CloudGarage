namespace CloudGarage.CashBank {
    export interface CashadjustmentForm {
        VDate: Serenity.DateEditor;
        Vtype: Serenity.EnumEditor;
        CoaId: Serenity.LookupEditor;
        Coa: Serenity.StringEditor;
        AccountType: Serenity.EnumEditor;
        Credit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }

    export class CashadjustmentForm extends Serenity.PrefixedContext {
        static formKey = 'CashBank.Cashadjustment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CashadjustmentForm.init)  {
                CashadjustmentForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.EnumEditor;
                var w2 = s.LookupEditor;
                var w3 = s.StringEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(CashadjustmentForm, [
                    'VDate', w0,
                    'Vtype', w1,
                    'CoaId', w2,
                    'Coa', w3,
                    'AccountType', w1,
                    'Credit', w4,
                    'Narration', w5
                ]);
            }
        }
    }
}
