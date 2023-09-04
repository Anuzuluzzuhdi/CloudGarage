namespace CloudGarage.Masters {
    export interface WarehousesRow {
        Id?: number;
        Name?: string;
        Description?: string;
        CountryId?: number;
        StateId?: number;
        CityId?: number;
        Phone?: string;
        Address?: string;
        CountryName?: string;
        StateName?: string;
        StateCountryId?: number;
        CityName?: string;
        CityCountryId?: number;
        CityStateId?: number;
    }

    export namespace WarehousesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Warehouses';
        export const lookupKey = 'Masters.Warehouses';

        export function getLookup(): Q.Lookup<WarehousesRow> {
            return Q.getLookup<WarehousesRow>('Masters.Warehouses');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            CountryId = "CountryId",
            StateId = "StateId",
            CityId = "CityId",
            Phone = "Phone",
            Address = "Address",
            CountryName = "CountryName",
            StateName = "StateName",
            StateCountryId = "StateCountryId",
            CityName = "CityName",
            CityCountryId = "CityCountryId",
            CityStateId = "CityStateId"
        }
    }
}
