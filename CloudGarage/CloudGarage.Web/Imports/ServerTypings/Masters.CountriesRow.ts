namespace CloudGarage.Masters {
    export interface CountriesRow {
        Id?: number;
        Name?: string;
        Iso3?: string;
        NumericCode?: string;
        Iso2?: string;
        PhoneCode?: string;
        Capital?: string;
        Currency?: string;
        CurrencySymbol?: string;
        Tld?: string;
        Native?: string;
        Region?: string;
        SubRegion?: string;
        Timezones?: string;
        Translations?: string;
        Latitude?: number;
        Longitude?: number;
        Emoji?: string;
        EmojiU?: string;
        WikiDataId?: string;
        Notes?: string;
        In?: number[];
        InBy?: string;
        Up?: number[];
        UpBy?: string;
    }

    export namespace CountriesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Countries';
        export const lookupKey = 'Masters.Countries';

        export function getLookup(): Q.Lookup<CountriesRow> {
            return Q.getLookup<CountriesRow>('Masters.Countries');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Iso3 = "Iso3",
            NumericCode = "NumericCode",
            Iso2 = "Iso2",
            PhoneCode = "PhoneCode",
            Capital = "Capital",
            Currency = "Currency",
            CurrencySymbol = "CurrencySymbol",
            Tld = "Tld",
            Native = "Native",
            Region = "Region",
            SubRegion = "SubRegion",
            Timezones = "Timezones",
            Translations = "Translations",
            Latitude = "Latitude",
            Longitude = "Longitude",
            Emoji = "Emoji",
            EmojiU = "EmojiU",
            WikiDataId = "WikiDataId",
            Notes = "Notes",
            In = "In",
            InBy = "InBy",
            Up = "Up",
            UpBy = "UpBy"
        }
    }
}
