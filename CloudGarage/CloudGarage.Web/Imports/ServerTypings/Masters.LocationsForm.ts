﻿namespace CloudGarage.Masters {
    export interface LocationsForm {
        Name: Serenity.StringEditor;
        CountryId: Serenity.IntegerEditor;
        StateId: Serenity.IntegerEditor;
        CityId: Serenity.IntegerEditor;
        Address: Serenity.StringEditor;
        Latitude: Serenity.StringEditor;
        Longitude: Serenity.StringEditor;
    }

    export class LocationsForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Locations';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LocationsForm.init)  {
                LocationsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(LocationsForm, [
                    'Name', w0,
                    'CountryId', w1,
                    'StateId', w1,
                    'CityId', w1,
                    'Address', w0,
                    'Latitude', w0,
                    'Longitude', w0
                ]);
            }
        }
    }
}
