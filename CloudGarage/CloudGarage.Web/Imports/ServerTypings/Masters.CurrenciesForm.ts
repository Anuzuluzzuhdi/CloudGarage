namespace CloudGarage.Masters {
    export interface CurrenciesForm {
        CurrencyName: Serenity.StringEditor;
        CurrencySymbol: Serenity.StringEditor;
    }

    export class CurrenciesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Currencies';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CurrenciesForm.init)  {
                CurrenciesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CurrenciesForm, [
                    'CurrencyName', w0,
                    'CurrencySymbol', w0
                ]);
            }
        }
    }
}
