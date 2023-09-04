namespace CloudGarage.Reports {
    export interface DailyclosingForm {
        Date: Serenity.DateEditor;
        LastDayClosing: Serenity.DecimalEditor;
        CashIn: Serenity.DecimalEditor;
        CashOut: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
    }

    export class DailyclosingForm extends Serenity.PrefixedContext {
        static formKey = 'Reports.Dailyclosing';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DailyclosingForm.init)  {
                DailyclosingForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(DailyclosingForm, [
                    'Date', w0,
                    'LastDayClosing', w1,
                    'CashIn', w1,
                    'CashOut', w1,
                    'Amount', w1
                ]);
            }
        }
    }
}
