namespace CloudGarage.Masters {
    export interface VehicletypesForm {
        Name: Serenity.StringEditor;
    }

    export class VehicletypesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Vehicletypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VehicletypesForm.init)  {
                VehicletypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(VehicletypesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
