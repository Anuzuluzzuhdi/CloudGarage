namespace CloudGarage.Masters {
    export interface CustomergroupsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class CustomergroupsForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Customergroups';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomergroupsForm.init)  {
                CustomergroupsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CustomergroupsForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}
