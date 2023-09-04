namespace CloudGarage.JobCards {
    export interface GatepassesForm {
        JobCard: Serenity.LookupEditor;
        Customer: Serenity.LookupEditor;
        Vehicle: Serenity.LookupEditor;
        VehicleOutDate: Serenity.DateEditor;
    }

    export class GatepassesForm extends Serenity.PrefixedContext {
        static formKey = 'JobCards.Gatepasses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GatepassesForm.init)  {
                GatepassesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;

                Q.initFormType(GatepassesForm, [
                    'JobCard', w0,
                    'Customer', w0,
                    'Vehicle', w0,
                    'VehicleOutDate', w1
                ]);
            }
        }
    }
}
