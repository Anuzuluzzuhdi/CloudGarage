namespace CloudGarage.Masters {
    export interface StatesRow {
        Id?: number;
        Name?: string;
        CountryId?: number;
        CountryCode?: string;
        FipsCode?: string;
        Iso2?: string;
        Latitude?: number;
        Longitude?: number;
        WikiDataId?: string;
        Notes?: string;
        In?: number[];
        InBy?: string;
        Up?: number[];
        UpBy?: string;
        CountryName?: string;
    }

    export namespace StatesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.States';
        export const lookupKey = 'Masters.States';

        export function getLookup(): Q.Lookup<StatesRow> {
            return Q.getLookup<StatesRow>('Masters.States');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            CountryId = "CountryId",
            CountryCode = "CountryCode",
            FipsCode = "FipsCode",
            Iso2 = "Iso2",
            Latitude = "Latitude",
            Longitude = "Longitude",
            WikiDataId = "WikiDataId",
            Notes = "Notes",
            In = "In",
            InBy = "InBy",
            Up = "Up",
            UpBy = "UpBy",
            CountryName = "CountryName"
        }
    }
}
