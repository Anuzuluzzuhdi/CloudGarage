namespace CloudGarage.Masters {
    export interface ColortypesForm {
        Name: Serenity.StringEditor;
    }

    export class ColortypesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Colortypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ColortypesForm.init)  {
                ColortypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ColortypesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
