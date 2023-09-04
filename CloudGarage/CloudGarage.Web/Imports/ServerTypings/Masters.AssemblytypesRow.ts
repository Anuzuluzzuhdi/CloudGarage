namespace CloudGarage.Masters {
    export interface AssemblytypesRow {
        Id?: number;
        Name?: string;
    }

    export namespace AssemblytypesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Masters.Assemblytypes';
        export const lookupKey = 'Masters.Assemblytypes';

        export function getLookup(): Q.Lookup<AssemblytypesRow> {
            return Q.getLookup<AssemblytypesRow>('Masters.Assemblytypes');
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
