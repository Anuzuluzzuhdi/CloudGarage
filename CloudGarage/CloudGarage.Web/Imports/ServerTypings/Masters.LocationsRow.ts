namespace CloudGarage.Masters {
    export interface LocationsRow {
        Id?: number;
        Name?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
        Address?: string;
        Latitude?: string;
        Longitude?: string;
    }

    export namespace LocationsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Locations';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
            Address = "Address",
            Latitude = "Latitude",
            Longitude = "Longitude"
        }
    }
}
