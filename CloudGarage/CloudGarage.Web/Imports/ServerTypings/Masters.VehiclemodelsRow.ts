namespace CloudGarage.Masters {
    export interface VehiclemodelsRow {
        Id?: number;
        Name?: string;
    }

    export namespace VehiclemodelsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Vehiclemodels';
        export const lookupKey = 'Masters.Vehiclemodels';

        export function getLookup(): Q.Lookup<VehiclemodelsRow> {
            return Q.getLookup<VehiclemodelsRow>('Masters.Vehiclemodels');
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
