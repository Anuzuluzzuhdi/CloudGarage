namespace CloudGarage.Masters {
    export interface StatesForm {
        Name: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
        CountryCode: Serenity.StringEditor;
        FipsCode: Serenity.StringEditor;
        Iso2: Serenity.StringEditor;
        Latitude: Serenity.DecimalEditor;
        Longitude: Serenity.DecimalEditor;
        WikiDataId: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
        In: Serenity.StringEditor;
        InBy: Serenity.StringEditor;
        Up: Serenity.StringEditor;
        UpBy: Serenity.StringEditor;
    }

    export class StatesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.States';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StatesForm.init)  {
                StatesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(StatesForm, [
                    'Name', w0,
                    'CountryId', w1,
                    'CountryCode', w0,
                    'FipsCode', w0,
                    'Iso2', w0,
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
