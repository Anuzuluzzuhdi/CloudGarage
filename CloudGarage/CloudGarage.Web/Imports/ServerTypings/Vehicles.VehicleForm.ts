namespace CloudGarage.Vehicles {
    export interface VehicleForm {
        CustomerId: Serenity.LookupEditor;
        VehicleRegistration: Serenity.StringEditor;
        Make: Serenity.LookupEditor;
        Year: Serenity.IntegerEditor;
        Seats: Serenity.IntegerEditor;
        CcRating: Serenity.StringEditor;
        Model: Serenity.LookupEditor;
        FuelType: Serenity.LookupEditor;
        Color: Serenity.LookupEditor;
        AssemblyType: Serenity.LookupEditor;
        SecondColor: Serenity.LookupEditor;
        CountryOfOrigin: Serenity.LookupEditor;
        SubModel: Serenity.StringEditor;
        GrossVehicleMass: Serenity.IntegerEditor;
        BodyStyle: Serenity.StringEditor;
        TareWeight: Serenity.StringEditor;
        Axles: Serenity.StringEditor;
        Wheelbase: Serenity.StringEditor;
        EngineNo: Serenity.StringEditor;
        FrontAxleGroupRating: Serenity.StringEditor;
        VehicleType: Serenity.LookupEditor;
        RearAxleGroupRating: Serenity.StringEditor;
        Brand: Serenity.LookupEditor;
        NoteList: Note.NotesEditor;
    }

    export class VehicleForm extends Serenity.PrefixedContext {
        static formKey = 'Vehicles.Vehicle';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VehicleForm.init)  {
                VehicleForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = Note.NotesEditor;

                Q.initFormType(VehicleForm, [
                    'CustomerId', w0,
                    'VehicleRegistration', w1,
                    'Make', w0,
                    'Year', w2,
                    'Seats', w2,
                    'CcRating', w1,
                    'Model', w0,
                    'FuelType', w0,
                    'Color', w0,
                    'AssemblyType', w0,
                    'SecondColor', w0,
                    'CountryOfOrigin', w0,
                    'SubModel', w1,
                    'GrossVehicleMass', w2,
                    'BodyStyle', w1,
                    'TareWeight', w1,
                    'Axles', w1,
                    'Wheelbase', w1,
                    'EngineNo', w1,
                    'FrontAxleGroupRating', w1,
                    'VehicleType', w0,
                    'RearAxleGroupRating', w1,
                    'Brand', w0,
                    'NoteList', w3
                ]);
            }
        }
    }
}
