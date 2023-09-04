namespace CloudGarage.Bookings {
    export interface VehiclebookingsForm {
        Title: Serenity.StringEditor;
        BookingDateTime: Serenity.DateTimeEditor;
        Customer: Serenity.LookupEditor;
        Vehicle: Serenity.LookupEditor;
        BranchesId: Serenity.LookupEditor;
        Note: Serenity.TextAreaEditor;
    }

    export class VehiclebookingsForm extends Serenity.PrefixedContext {
        static formKey = 'Bookings.Vehiclebookings';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VehiclebookingsForm.init)  {
                VehiclebookingsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateTimeEditor;
                var w2 = s.LookupEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(VehiclebookingsForm, [
                    'Title', w0,
                    'BookingDateTime', w1,
                    'Customer', w2,
                    'Vehicle', w2,
                    'BranchesId', w2,
                    'Note', w3
                ]);
            }
        }
    }
}
