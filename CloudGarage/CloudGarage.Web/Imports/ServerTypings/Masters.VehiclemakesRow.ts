namespace CloudGarage.Masters {
    export interface VehiclemakesRow {
        Id?: number;
        Name?: string;
    }

    export namespace VehiclemakesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Vehiclemakes';
        export const lookupKey = 'Masters.Vehiclemakes';

        export function getLookup(): Q.Lookup<VehiclemakesRow> {
            return Q.getLookup<VehiclemakesRow>('Masters.Vehiclemakes');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name"
        }
    }
}
