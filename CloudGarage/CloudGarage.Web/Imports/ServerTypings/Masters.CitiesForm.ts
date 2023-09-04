namespace CloudGarage.Masters {
    export interface CitiesForm {
        Name: Serenity.StringEditor;
        StateId: Serenity.LookupEditor;
        StateCode: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        CountryCode: Serenity.StringEditor;
        Latitude: Serenity.DecimalEditor;
        Longitude: Serenity.DecimalEditor;
        WikiDataId: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
        In: Serenity.StringEditor;
        InBy: Serenity.StringEditor;
        Up: Serenity.StringEditor;
        UpBy: Serenity.StringEditor;
    }

    export class CitiesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Cities';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CitiesForm.init)  {
                CitiesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(CitiesForm, [
                    'Name', w0,
                    'StateId', w1,
                    'StateCode', w0,
                    'CountryId', w1,
                    'CountryCode', w0,
                    'Latitude', w2,
                    'Longitude', w2,
                    'WikiDataId', w0,
                    'Notes', w0,
                    'In', w0,
                    'InBy', w0,
                    'Up', w0,
                    'UpBy', w0
                ]);
            }
        }
    }
}
