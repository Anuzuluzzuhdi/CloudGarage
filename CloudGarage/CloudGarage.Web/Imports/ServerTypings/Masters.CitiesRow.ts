namespace CloudGarage.Masters {
    export interface CitiesRow {
        Id?: number;
        Name?: string;
        StateId?: number;
        StateCode?: string;
        CountryId?: number;
        CountryCode?: string;
        Latitude?: number;
        Longitude?: number;
        WikiDataId?: string;
        Notes?: string;
        In?: number[];
        InBy?: string;
        Up?: number[];
        UpBy?: string;
        CountryName?: string;
        StateName?: string;
        StateCountryId?: number;
    }

    export namespace CitiesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Cities';
        export const lookupKey = 'Masters.Cities';

        export function getLookup(): Q.Lookup<CitiesRow> {
            return Q.getLookup<CitiesRow>('Masters.Cities');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            StateId = "StateId",
            StateCode = "StateCode",
            CountryId = "CountryId",
            CountryCode = "CountryCode",
            Latitude = "Latitude",
            Longitude = "Longitude",
            WikiDataId = "WikiDataId",
            Notes = "Notes",
            In = "In",
            InBy = "InBy",
            Up = "Up",
            UpBy = "UpBy",
            CountryName = "CountryName",
            StateName = "StateName",
            StateCountryId = "StateCountryId"
        }
    }
}
