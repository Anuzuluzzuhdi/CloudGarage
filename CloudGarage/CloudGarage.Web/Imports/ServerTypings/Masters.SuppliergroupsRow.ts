namespace CloudGarage.Masters {
    export interface SuppliergroupsRow {
        Id?: number;
        Name?: string;
        Description?: string;
    }

    export namespace SuppliergroupsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Suppliergroups';
        export const lookupKey = 'Masters.SupplierGroups';

        export function getLookup(): Q.Lookup<SuppliergroupsRow> {
            return Q.getLookup<SuppliergroupsRow>('Masters.SupplierGroups');
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
