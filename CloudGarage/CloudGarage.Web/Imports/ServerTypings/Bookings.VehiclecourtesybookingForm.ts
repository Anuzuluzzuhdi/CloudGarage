namespace CloudGarage.Bookings {
    export interface VehiclecourtesybookingForm {
        Title: Serenity.StringEditor;
        StartDateTime: Serenity.DateEditor;
        EndDateTime: Serenity.DateEditor;
        Customer: Serenity.LookupEditor;
        Vehicle: Serenity.LookupEditor;
        BranchesId: Serenity.LookupEditor;
        Note: Serenity.TextAreaEditor;
    }

    export class VehiclecourtesybookingForm extends Serenity.PrefixedContext {
        static formKey = 'Bookings.Vehiclecourtesybooking';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VehiclecourtesybookingForm.init)  {
                VehiclecourtesybookingForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(VehiclecourtesybookingForm, [
                    'Title', w0,
                    'StartDateTime', w1,
                    'EndDateTime', w1,
                    'Customer', w2,
                    'Vehicle', w2,
                    'BranchesId', w2,
                    'Note', w3
                ]);
            }
        }
    }
}
