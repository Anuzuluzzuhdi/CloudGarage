namespace CloudGarage.Inventory {
    export interface UnitsRow {
        Id?: number;
        Name?: string;
        Description?: string;
    }

    export namespace UnitsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Inventory.Units';
        export const lookupKey = 'Inventory.Units';

        export function getLookup(): Q.Lookup<UnitsRow> {
            return Q.getLookup<UnitsRow>('Inventory.Units');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description"
        }
    }
}
