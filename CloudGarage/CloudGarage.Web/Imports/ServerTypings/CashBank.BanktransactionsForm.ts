namespace CloudGarage.CashBank {
    export interface BanktransactionsForm {
        VDate: Serenity.DateEditor;
        AccountType: Serenity.EnumEditor;
        VNo: Serenity.DecimalEditor;
        Vtype: Serenity.EnumEditor;
        CoaId: Serenity.LookupEditor;
        Credit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }

    export class BanktransactionsForm extends Serenity.PrefixedContext {
        static formKey = 'CashBank.Banktransactions';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BanktransactionsForm.init)  {
                BanktransactionsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.EnumEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.LookupEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(BanktransactionsForm, [
                    'VDate', w0,
                    'AccountType', w1,
                    'VNo', w2,
                    'Vtype', w1,
                    'CoaId', w3,
                    'Credit', w2,
                    'Narration', w4
                ]);
            }
        }
    }
}
