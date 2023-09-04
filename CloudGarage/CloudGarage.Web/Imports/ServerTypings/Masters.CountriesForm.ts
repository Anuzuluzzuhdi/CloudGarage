namespace CloudGarage.Masters {
    export interface CountriesForm {
        Name: Serenity.StringEditor;
        Iso3: Serenity.StringEditor;
        NumericCode: Serenity.StringEditor;
        Iso2: Serenity.StringEditor;
        PhoneCode: Serenity.StringEditor;
        Capital: Serenity.StringEditor;
        Currency: Serenity.StringEditor;
        CurrencySymbol: Serenity.StringEditor;
        Tld: Serenity.StringEditor;
        Native: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        SubRegion: Serenity.StringEditor;
        Timezones: Serenity.StringEditor;
        Translations: Serenity.StringEditor;
        Latitude: Serenity.DecimalEditor;
        Longitude: Serenity.DecimalEditor;
        Emoji: Serenity.StringEditor;
        EmojiU: Serenity.StringEditor;
        WikiDataId: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
        In: Serenity.StringEditor;
        InBy: Serenity.StringEditor;
        Up: Serenity.StringEditor;
        UpBy: Serenity.StringEditor;
    }

    export class CountriesForm extends Serenity.PrefixedContext {
        static formKey = 'Masters.Countries';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CountriesForm.init)  {
                CountriesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(CountriesForm, [
                    'Name', w0,
                    'Iso3', w0,
                    'NumericCode', w0,
                    'Iso2', w0,
                    'PhoneCode', w0,
                    'Capital', w0,
                    'Currency', w0,
                    'CurrencySymbol', w0,
                    'Tld', w0,
                    'Native', w0,
                    'Region', w0,
                    'SubRegion', w0,
                    'Timezones', w0,
                    'Translations', w0,
                    'Latitude', w1,
                    'Longitude', w1,
                    'Emoji', w0,
                    'EmojiU', w0,
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
