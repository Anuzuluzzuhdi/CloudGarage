namespace CloudGarage.Masters {
    export interface VehiclemakesForm {
        Name: Serenity.StringEditor;
    }

    export class VehiclemakesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Vehiclemakes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VehiclemakesForm.init)  {
                VehiclemakesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(VehiclemakesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
