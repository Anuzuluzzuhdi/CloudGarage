namespace CloudGarage.Masters {
    export interface VehicletypesRow {
        Id?: number;
        Name?: string;
    }

    export namespace VehicletypesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Vehicletypes';
        export const lookupKey = 'Masters.Vehicletypes';

        export function getLookup(): Q.Lookup<VehicletypesRow> {
            return Q.getLookup<VehicletypesRow>('Masters.Vehicletypes');
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
