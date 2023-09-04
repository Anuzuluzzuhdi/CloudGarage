namespace CloudGarage.Inventory {
    export interface BrandsRow {
        Id?: number;
        Name?: string;
        Description?: string;
    }

    export namespace BrandsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Inventory.Brands';
        export const lookupKey = 'Inventory.Brands';

        export function getLookup(): Q.Lookup<BrandsRow> {
            return Q.getLookup<BrandsRow>('Inventory.Brands');
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
