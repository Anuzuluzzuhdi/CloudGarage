namespace CloudGarage.Masters {
    export interface ExpensestypesForm {
        Type: Serenity.StringEditor;
    }

    export class ExpensestypesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Expensestypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExpensestypesForm.init)  {
                ExpensestypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ExpensestypesForm, [
                    'Type', w0
                ]);
            }
        }
    }
}
