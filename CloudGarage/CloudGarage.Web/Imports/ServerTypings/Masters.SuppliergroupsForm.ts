namespace CloudGarage.Masters {
    export interface SuppliergroupsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class SuppliergroupsForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Suppliergroups';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SuppliergroupsForm.init)  {
                SuppliergroupsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SuppliergroupsForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}
