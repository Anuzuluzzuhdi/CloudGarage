namespace CloudGarage.Masters {
    export interface VehiclemodelsForm {
        Name: Serenity.StringEditor;
    }

    export class VehiclemodelsForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Vehiclemodels';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VehiclemodelsForm.init)  {
                VehiclemodelsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(VehiclemodelsForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
