namespace CloudGarage.Inventory {
    export interface UnitsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class UnitsForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Units';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UnitsForm.init)  {
                UnitsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(UnitsForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}
