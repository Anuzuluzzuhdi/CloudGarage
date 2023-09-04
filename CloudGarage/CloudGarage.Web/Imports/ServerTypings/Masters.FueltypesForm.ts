namespace CloudGarage.Masters {
    export interface FueltypesForm {
        Name: Serenity.StringEditor;
    }

    export class FueltypesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Fueltypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FueltypesForm.init)  {
                FueltypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(FueltypesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
