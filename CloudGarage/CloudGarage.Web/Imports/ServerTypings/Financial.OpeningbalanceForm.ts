namespace CloudGarage.Financial {
    export interface OpeningbalanceForm {
        VDate: Serenity.DateEditor;
        CoaId: Serenity.LookupEditor;
        AccountType: Serenity.EnumEditor;
        Debit: Serenity.DecimalEditor;
        Narration: Serenity.TextAreaEditor;
    }

    export class OpeningbalanceForm extends Serenity.PrefixedContext {
        static formKey = 'Financial.Openingbalance';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OpeningbalanceForm.init)  {
                OpeningbalanceForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.LookupEditor;
                var w2 = s.EnumEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(OpeningbalanceForm, [
                    'VDate', w0,
                    'CoaId', w1,
                    'AccountType', w2,
                    'Debit', w3,
                    'Narration', w4
                ]);
            }
        }
    }
}
