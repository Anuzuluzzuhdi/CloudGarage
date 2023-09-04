namespace CloudGarage.Masters {
    export interface AssemblytypesForm {
        Name: Serenity.StringEditor;
    }

    export class AssemblytypesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Assemblytypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AssemblytypesForm.init)  {
                AssemblytypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AssemblytypesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
